// const config = {
//   content: ["./src/**/*.{html,js,svelte,ts}"],

//   theme: {
//     extend: {
//       animation: {
//         "slide-in-left":
//           "slide-in-left 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s infinite both",
//       },
//       keyframes: {
//         "slide-in-left": {
//           "0%": {
//             transform: "translateX(-1000px)",
//             opacity: "0",
//           },
//           to: {
//             transform: "translateX(0)",
//             opacity: "1",
//           },
//         },
//       },
//     },
//   },

//   plugins: [require("@tailwindcss/typography")],
// };

// module.exports = config;

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "spin 3s linear infinite both",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
