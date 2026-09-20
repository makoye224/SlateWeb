/**
 * Direct calls to Cognito's public, unauthenticated IdP actions —
 * ConfirmSignUp and ConfirmForgotPassword need only the app client id (no
 * secret; SlateApp's own client has none) plus the code the user already
 * holds from their email link. No AWS credentials involved, same trust
 * model as typing the code into the app.
 */
const REGION = "us-east-2";
const CLIENT_ID = "73hp36pjm3tpv05k3o84qr8ss0";
const ENDPOINT = `https://cognito-idp.${REGION}.amazonaws.com/`;

async function callCognito(target: string, body: Record<string, unknown>) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": `AWSCognitoIdentityProviderService.${target}`,
    },
    body: JSON.stringify({ ClientId: CLIENT_ID, ...body }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new CognitoError(data?.message || data?.__type || "Something went wrong.", data?.__type);
  }

  return res.json();
}

export class CognitoError extends Error {
  code?: string;
  constructor(message: string, code?: string) {
    super(message);
    this.code = code;
  }
}

export function confirmSignUp(username: string, confirmationCode: string) {
  return callCognito("ConfirmSignUp", { Username: username, ConfirmationCode: confirmationCode });
}

export function confirmForgotPassword(username: string, confirmationCode: string, password: string) {
  return callCognito("ConfirmForgotPassword", {
    Username: username,
    ConfirmationCode: confirmationCode,
    Password: password,
  });
}

/** Translates the common Cognito exception types into copy a visitor can act on. */
export function friendlyCognitoMessage(err: unknown): string {
  if (err instanceof CognitoError) {
    switch (err.code) {
      case "ExpiredCodeException":
        return "This link has expired. Request a new one from the app.";
      case "CodeMismatchException":
        return "This link is invalid. Request a new one from the app.";
      case "NotAuthorizedException":
        return "This link has already been used.";
      case "UserNotFoundException":
        return "We couldn't find that account.";
      case "InvalidPasswordException":
        return err.message || "That password doesn't meet the requirements.";
      case "LimitExceededException":
        return "Too many attempts. Try again in a few minutes.";
      default:
        return err.message || "Something went wrong. Try again from the app.";
    }
  }
  return "Something went wrong. Check your connection and try again.";
}
