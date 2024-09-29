import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
<<<<<<< HEAD
        textoMaquinaria: "hsl(var(--texto-maquinaria))",
        texto: "hsl(var(--texto))",
        fondoTarjeta: "hsl(var(--fondo-tarjeta))",
        fondoBoton: "hsl(var(--fondo-boton))",
        bordeCalendarioInternoDias: "hsl(var(--borde-calendario-interno-dias))",
        bordeCalendarioInterno: "hsl(var(--borde-calendario-interno))",
        fondoCalendario: "hsl(var(--fondo-calendario))",
=======
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        grisFondo: "hsl(var(--gris-fondo))",
        fondo: "hsl(var(--fondo))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "open-menu": {
<<<<<<< HEAD
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
=======
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
<<<<<<< HEAD
        "open-menu": "open-menu 0.3s ease-in-out forwards",
=======
        "open-menu": "open-menu 0.5s ease-in-out forwards",
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
        "close-menu": "close-menu 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
