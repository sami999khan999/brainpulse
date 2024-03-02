import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0F172A",
        scoundary: "#1E293B",
        white: "#FFFFFF",
        vaiolet: "#6366F1",
        blue: "#38BDF8",
      },
    },
  },
  plugins: [],
};
export default config;
