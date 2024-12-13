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
        cyan: {
          550: "#1FCEC9",
        },
        blue: {
          450: "#4B97D3",
        },
      },
      screens: {
        xl: "85.5rem",
      },
      spacing: {
        15: "3.75rem",
      },
      width: {
        15: "3.75rem",
        85: "21.25rem",
      },

      maxWidth: {
        162: "40.625rem",
      },

      lineHeight: {
        7.5: "1.875rem",
      },

      fontSize: {
        xsm: "0.8125rem",
        "5.5xl": "1.375rem",
      },

      borderRadius: {
        DEFAULT: "3px",
        "2.5xl": "1.25rem",
      },
      keyframes: {
        "animate-fade-in": {
          from: {
            transform: "scale(0.98)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },

      animation: {
        "fade-in": "animate-fade-in linear -300ms 300ms 1 both",
      },
    },
  },
  plugins: [],
};
