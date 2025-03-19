module.exports = {
    content: ["./index.html", "./index.js" , "./components/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
          animation: {
            "fade-in": "fade-in 1s ease-out forwards",
          },
          keyframes: {
            "fade-in": {
              "0%": { opacity: "0", transform: "translateY(10px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
  };