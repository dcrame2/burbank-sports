import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burbank Sports — Custom Shirts, Jerseys & Sportswear";

export default async function OgImage() {
  const fontBold = await readFile(
    join(process.cwd(), "src/app/fonts/Inter-Bold.ttf")
  );
  const fontRegular = await readFile(
    join(process.cwd(), "src/app/fonts/Inter-Regular.ttf")
  );

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
          background: "linear-gradient(135deg, #0f1d4a 0%, #152057 50%, #1e3a8a 100%)",
          fontFamily: "Inter",
          padding: "60px 80px",
          textAlign: "center",
        }}
      >
        {/* Floating sports shapes */}
        <div style={{ position: "absolute", top: 40, left: 60, opacity: 0.07, display: "flex" }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" /><path d="M6.3 3.8c1.5 2.2 2.2 5 2 7.8-.2 2.8-1.2 5.5-3 7.7" fill="none" stroke="white" strokeWidth="1.2" /><path d="M17.7 3.8c-1.5 2.2-2.2 5-2 7.8.2 2.8 1.2 5.5 3 7.7" fill="none" stroke="white" strokeWidth="1.2" /></svg>
        </div>
        <div style={{ position: "absolute", top: 60, right: 80, opacity: 0.07, display: "flex" }}>
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7H4a1 1 0 00-1 1v1a3 3 0 003 3h1M17 7h3a1 1 0 011 1v1a3 3 0 01-3 3h-1" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ position: "absolute", bottom: 50, left: 100, opacity: 0.07, display: "flex" }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 60, opacity: 0.07, display: "flex" }}>
          <svg width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2v20" /><path d="M5.6 5.6c3.5 2.5 3.5 10.3 0 12.8" /><path d="M18.4 5.6c-3.5 2.5-3.5 10.3 0 12.8" /></svg>
        </div>
        <div style={{ position: "absolute", top: 280, left: 40, opacity: 0.05, display: "flex" }}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M6.5 2L2 6l3 2v12h14V8l3-2-4.5-4-3 3h-5l-3-3z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ position: "absolute", top: 200, right: 40, opacity: 0.05, display: "flex" }}>
          <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="9" ry="5" transform="rotate(-45 12 12)" /><path d="M15.5 8.5l-7 7" strokeLinecap="round" /><path d="M12 9.5l-2.5 2.5M14.5 12L12 14.5" strokeLinecap="round" /></svg>
        </div>

        <h1
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: "white",
            margin: "20px 0 0 0",
            lineHeight: 1,
            letterSpacing: -3,
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
            fontSize: 32,
            color: "#dbeafe",
            margin: 0,
            fontWeight: 400,
            letterSpacing: 1,
          }}
        >
          Custom Shirts, Jerseys &amp; Sportswear
        </p>

        <p
          style={{
            fontSize: 28,
            color: "white",
            margin: "40px 0 0 0",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          (708) 422-7777
        </p>

        <p
          style={{
            fontSize: 18,
            color: "#93c5fd",
            margin: "8px 0 0 0",
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          5500 W 79th St, Burbank, IL 60459
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
