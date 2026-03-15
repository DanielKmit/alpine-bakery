import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#5C3D2E",
          50: "#F5EDE8",
          100: "#EBDBD1",
          200: "#D7B7A3",
          300: "#C39375",
          400: "#8F6347",
          500: "#5C3D2E",
          600: "#4A3125",
          700: "#38251C",
          800: "#261913",
          900: "#140D0A",
        },
        wheat: {
          DEFAULT: "#D4A574",
          50: "#FDF6EE",
          100: "#F8E8D5",
          200: "#EDCFAB",
          300: "#D4A574",
          400: "#C48A4F",
          500: "#A97035",
          600: "#845828",
          700: "#5F3F1D",
          800: "#3A2712",
          900: "#150E07",
        },
        brick: {
          DEFAULT: "#E8533E",
          50: "#FEF0EE",
          100: "#FCDDD9",
          200: "#F9B8B0",
          300: "#F39387",
          400: "#ED7363",
          500: "#E8533E",
          600: "#D43221",
          700: "#A02619",
          800: "#6C1A11",
          900: "#380D09",
        },
        cream: {
          DEFAULT: "#FDF6EE",
          50: "#FFFFFF",
          100: "#FDF6EE",
          200: "#F5E3CC",
          300: "#EDD0AA",
          400: "#E5BD88",
          500: "#DDAA66",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
