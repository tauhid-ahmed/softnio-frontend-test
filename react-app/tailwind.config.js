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
        purple: {
          500: "#816BFF",
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

      letterSpacing: {
        tightest: "-0.075rem",
      },

      fontSize: {
        xsm: "0.8125rem",
        10: "2.5rem",
        "5.5xl": "1.375rem",
      },

      borderRadius: {
        DEFAULT: "3px",
        "2.5xl": "1.25rem",
      },
      keyframes: {
        "animate-fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },

      animation: {
        "fade-in": "animate-fade-in ease-in 300ms 1 both",
      },
    },
  },
  plugins: [],
};
