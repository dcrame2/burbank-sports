import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burbank Sports — Custom Shirts, Jerseys & Sportswear";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#93c5fd",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Family Owned Since 1970
        </p>

        <h1
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            margin: "16px 0 0 0",
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          Burbank Sports
        </h1>

        <div
          style={{
            width: 60,
            height: 3,
            background: "#93c5fd",
            borderRadius: 2,
            margin: "28px 0",
          }}
        />

        <p
          style={{
            fontSize: 26,
            color: "#dbeafe",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Custom Shirts, Jerseys &amp; Sportswear
        </p>

        <p
          style={{
            fontSize: 20,
            color: "#93c5fd",
            margin: "32px 0 0 0",
            fontWeight: 700,
          }}
        >
          (708) 422-7777
        </p>

        <p
          style={{
            fontSize: 14,
            color: "#60a5fa",
            margin: "6px 0 0 0",
          }}
        >
          5500 W 79th St, Burbank, IL 60459
        </p>
      </div>
    ),
    { ...size }
  );
}
