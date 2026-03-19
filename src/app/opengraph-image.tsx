import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #3b82f6 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "white",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "white",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px 60px",
          }}
        >
          {/* Top badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.15)",
              padding: "10px 24px",
              borderRadius: 50,
              marginBottom: 30,
            }}
          >
            <span style={{ color: "#93c5fd", fontSize: 16, fontWeight: 600, letterSpacing: 3 }}>
              FAMILY OWNED & OPERATED SINCE 1970
            </span>
          </div>

          {/* Main title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            BURBANK SPORTS
          </h1>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#93c5fd",
              margin: "10px 0 0 0",
              letterSpacing: 4,
            }}
          >
            INC.
          </h2>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 4,
              background: "#93c5fd",
              borderRadius: 2,
              margin: "24px 0",
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 24,
              color: "#dbeafe",
              margin: 0,
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Chicagoland&apos;s Team Specialist
          </p>

          {/* Services */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 28,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Custom Uniforms", "Letterman Jackets", "Trophies & Awards", "Screen Printing"].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    padding: "8px 20px",
                    borderRadius: 8,
                    color: "white",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>

          {/* Phone */}
          <p
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "white",
              marginTop: 30,
            }}
          >
            (708) 422-7777
          </p>

          {/* Address */}
          <p style={{ fontSize: 16, color: "#93c5fd", margin: "4px 0 0" }}>
            5500 W 79th St, Burbank, IL 60459
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
