/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6576FF",
        },
        secondary: {
          500: "#FFBB5A",
        },
        gray: {
          100: "#F5F6FA",
          200: "#DBDFEA",
          300: "#8091A7",
          400: "#3B4747",
          500: "#364A63",
        },
      },
      screens: {
        xl: "85.5rem",
      },
      spacing: {
        15: "3.75rem",
      },
      width: {
        85: "21.25rem",
      },
      lineHeight: {
        7.5: "1.875rem",
      },
    },

    keyframes: {
      "animate-fade-in": {
        from: {
          transform: "scale(0.95)",
        },
        to: {
          transform: "scale(1)",
        },
      },
    },

    animation: {
      "fade-in": "animate-fade-in linear 300ms 1 both",
    },
  },
  plugins: [],
};
