import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
      },
      colors: {
        accent: "var(--accent)",
        "accent-glow": "var(--accent-glow)",
        border: "var(--border)",
        "border-bright": "var(--border-bright)",
      },
    },
  },
} satisfies Config;
