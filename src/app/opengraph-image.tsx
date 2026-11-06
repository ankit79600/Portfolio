import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Ankit Patel — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Right glow */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 600,
            height: 630,
            background: "radial-gradient(circle at 80% 50%, rgba(0,230,118,0.08) 0%, transparent 65%)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, zIndex: 1 }}>
          <div
            style={{
              fontSize: 160,
              fontWeight: 800,
              color: "#00E676",
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            AP
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#FFFFFF",
              marginTop: 16,
              letterSpacing: "-1.5px",
            }}
          >
            Ankit Patel
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.35)",
              marginTop: 14,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              width: 100,
              height: 2,
              background: "#00E676",
              marginTop: 32,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.25)",
              marginTop: 20,
              letterSpacing: "2px",
            }}
          >
            India · Open to Work
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
