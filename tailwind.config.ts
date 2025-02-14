import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      //  star
      animation: {
        blink: 'blink 1s infinite', // 1 second blink animation
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: '1', // fully visible
          },
          '50%': {
            opacity: '0', // hidden halfway through
          },
        },
      },
    


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
        productbg:"#F3F1EF",
        productbg3:"#F4F1F4",
      },

      boxShadow:{
        custom:'0px 0.45px 4.48px 0px rgba(183, 183, 183, 0.08)',
      },
      fontFamily:{
        "figtree":["var(--font-figtree)"],
        "fjalla":["var(--font-fjalla)"],
      },
              
    },
    
  },

  plugins: [],
};

export default config;
