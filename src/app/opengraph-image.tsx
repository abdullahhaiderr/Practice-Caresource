import { ImageResponse } from "next/og";

export const alt =
  "PracticeCareSource. Medical billing and revenue cycle management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#153B58",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 82% 18%, rgba(37,138,138,0.28), transparent 42%), radial-gradient(circle at 12% 88%, rgba(23,107,145,0.35), transparent 46%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              background: "#258A8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            PracticeCareSource
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "900px" }}>
          <div
            style={{
              color: "#8FD3D3",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Medical billing & revenue cycle
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Clearer billing operations for healthcare practices
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "28px",
            color: "#C9D8E2",
            fontSize: "20px",
          }}
        >
          <span>Medical billing</span>
          <span style={{ color: "#258A8A" }}>•</span>
          <span>Coding</span>
          <span style={{ color: "#258A8A" }}>•</span>
          <span>Credentialing</span>
          <span style={{ color: "#258A8A" }}>•</span>
          <span>AR & denials</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
