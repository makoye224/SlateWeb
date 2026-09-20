import { ImageResponse } from "next/og";

export const alt = "Slate: a plan for the time you already have";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#2C2A6B",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -0.5,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 28,
          }}
        >
          Slate
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -2,
            color: "#fff",
            maxWidth: 950,
          }}
        >
          Free time isn&apos;t the shortage.
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -2,
            color: "#B7B8FF",
          }}
        >
          A plan for it is.
        </div>
      </div>
    ),
    { ...size },
  );
}
