import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../store/PortfolioProvider";
import { COLOR, FONT, glass } from "../styles/tokens";

export default function TerminalPanel() {
  const { contactInfo } = usePortfolio();
  const [visibleLines, setVisibleLines] = useState(0);

  const nameSlug = (contactInfo.name || "Nazem Almsouti").toLowerCase().replace(/\s+/g, "_");
  const titleClean = (contactInfo.title || "Frontend Engineer.").toLowerCase();
  const subtitleClean = contactInfo.subtitle || "Pharaon Group · React & TypeScript";

  const LINES: { text: string; color?: string }[] = [
    { text: "$ whoami", color: COLOR.textMuted },
    { text: `${nameSlug} — ${titleClean}`, color: COLOR.blueLight },
    { text: "$ stack --primary", color: COLOR.textMuted },
    { text: subtitleClean, color: COLOR.textSecondary },
    { text: "$ status", color: COLOR.textMuted },
    { text: contactInfo.badge || "shipping. mentoring. owning outcomes.", color: COLOR.indigoLight },
  ];

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const delay = LINES[visibleLines].text.startsWith("$") ? 420 : 620;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines, LINES.length]);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        border: glass.panel.border,
        background: glass.panel.background,
        backdropFilter: glass.panel.backdropFilter,
        WebkitBackdropFilter: glass.panel.WebkitBackdropFilter,
        boxShadow: `${glass.panel.boxShadow}, 0 24px 80px rgba(0,0,0,0.5)`,
        overflow: "hidden",
        width: "100%",
        maxWidth: 460,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        {["#f87171", "#fbbf24", "#4ade80"].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
        ))}
        <span style={{ marginLeft: 8, fontFamily: FONT.mono, fontSize: "0.7rem", color: COLOR.textFaint }}>
          zsh — {nameSlug.split("_")[0]}
        </span>
      </div>

      <div style={{ padding: "20px 22px", minHeight: 220, fontFamily: FONT.mono, fontSize: "0.85rem", lineHeight: 1.9 }}>
        {LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: line.color ?? COLOR.textSecondary, whiteSpace: "pre-wrap" }}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < LINES.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            style={{ display: "inline-block", width: 8, height: 15, background: COLOR.blue, verticalAlign: "middle" }}
          />
        )}
      </div>
    </div>
  );
}
