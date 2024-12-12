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
        background: "var(--background)",
        foreground: "var(--foreground)",
        searchColor:"#F0F0F0",
        rectangleColor:"#F2F0F1",
        newArravialbg:" #F0EEED",
        percentage: "#FF3333",
        starColor: "#FFC633",
        paymentLogo:"#D6DCE5",
        discountRate:"#FF3333",
      },

      boxShadow:{
        custom:'0px 0.45px 4.48px 0px rgba(183, 183, 183, 0.08)',
      },
      fontfamily:{
        "figtree":["var(--font-figtree)"],
        "fjalla":["var(--font-fjalla)"],
      },
           
     
    },
  },
  plugins: [],
};
export default config;
