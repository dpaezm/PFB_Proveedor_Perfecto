export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: "var(--color-rojo)",
        amarillo: "var(--color-amarillo)",
        amarillo2: "var(--color-amarillo2)",
        gris1: "var(--color-gris1)",
        gris2: "var(--color-gris2)",
        gris3: "var(--color-gris3)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      fontSize: {
        logo: ["40px", { lineHeight: "48px" }],
        cta: ["40px", { lineHeight: "48px" }],
        titulo: ["36px", { lineHeight: "44px" }],
        subtitulo: ["20px", { lineHeight: "28px" }],
        destacado: ["16px", { lineHeight: "24px" }],
        normal: ["12px", { lineHeight: "18px" }],
      },
    },
  },
  plugins: [],
};
