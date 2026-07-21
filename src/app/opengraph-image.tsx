import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zoe Meng — Frontend Engineer specializing in UX/UI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FAF9F6",
        padding: "0 80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: -100,
          width: 380,
          height: 380,
          borderRadius: "50%",
          backgroundColor: "#745DAC",
          opacity: 0.12,
        }}
      />
      {/* 顶部细线 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundColor: "#745DAC",
        }}
      />

      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          color: "#1A1A1A",
          letterSpacing: -2,
        }}
      >
        Zoe Meng
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 38,
          fontWeight: 500,
          color: "#745DAC",
          marginTop: 16,
        }}
      >
        Frontend Engineer · UX/UI Developer
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#555555",
          marginTop: 20,
        }}
      >
        React · TypeScript · Design Systems
      </div>
    </div>,
    { ...size },
  );
}
