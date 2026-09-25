import { NextResponse } from "next/server";

/**
 * Universal Links config — iOS fetches this over HTTPS (no extension, no
 * redirects allowed) to decide whether a tapped slate.ndotoni.com link
 * should open the app instead of Safari. `ZM228X2S66` is the Apple team ID,
 * `com.slateapp.app` the bundle ID (SlateApp's app.json). Must stay in sync
 * with SlateApp's `ios.associatedDomains` entry for this same domain.
 */
export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "ZM228X2S66.com.slateapp.app",
          paths: ["/invite/*"],
        },
      ],
    },
  });
}
