import { COLOR } from "../styles/tokens";

// Fixed ambient glow layer behind the whole page.
// The glassmorphism on cards/nav has nothing to refract without this —
// on a flat #08090b background, backdrop-filter blur is visually a no-op.
export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${COLOR.blue}3d 0%, ${COLOR.blue}00 70%)`,
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-15%",
          width: "55vw",
          height: "55vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${COLOR.indigo}38 0%, ${COLOR.indigo}00 70%)`,
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "20%",
          width: "50vw",
          height: "50vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${COLOR.navy}30 0%, ${COLOR.navy}00 70%)`,
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "40vw",
          maxWidth: 1000,
          background: `radial-gradient(ellipse at center, ${COLOR.blueLight}14 0%, transparent 70%)`,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}
