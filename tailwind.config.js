import animate from "tailwindcss-animate";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: {
    files: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    extract,
  },
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        brand: {
          gray: {
            100: "#CACACA",
            200: "#9F9F9F",
            300: "#9F9F9F3B",
            400: "#9F9F9F",
            500: "#8A8A8A",
            600: "#1B1B1B",
            700: "#ACACAC",
            800: "#A9A9A9",
            900: "#2e2e2e",
            1000: "#35353559",
          },
          blue: {
            100: "#002D56",
          },
          white: {
            100: "#FFFFFF",
            200: "#C8C8C8",
            300: "#727272",
            400: "#C2C2C2",
          },
          purple: {
            100: "#7030FD40",
            200: "#6325E9",
            300: "#4001CA7A",
            400: "#C395FF",
            500: "#4001CA",
            600: "#7030fd",
            700: "#4B357A",
          },
        },
      },
      backgroundColor: {
        "dark-100": "#0A0A0A",
        "dark-200": "#0E0E0E",
        "dark-300": "#222222",
        "dark-400": "#222222",
        "dark-500": "#222222ED",
        "dark-600": "#161616AD",
      },
      fontFamily: {
        oxanium: ["Oxanium", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens,
    fontSize,
  },
  plugins: [animate, fluid],
};
