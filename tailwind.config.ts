import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  plugins: [
    require("flowbite/plugin"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  theme: {},
};
export default config;
