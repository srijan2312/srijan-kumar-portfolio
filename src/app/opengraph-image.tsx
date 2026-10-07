import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph image, rendered at request time with next/og.
 * No external assets — pure layout, so it never breaks.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#070709",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 6,
            color: "#a78bfa",
          }}
        >
          COMPUTER SCIENCE ENGINEERING GRADUATE
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 500,
            color: "#f4f3ee",
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 40,
            fontStyle: "italic",
            color: "#93c5fd",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            fontFamily: "monospace",
            fontSize: 24,
            color: "#a3a29b",
          }}
        >
          React · Node.js · MongoDB · Docker · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
