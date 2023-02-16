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

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['"Cabin"', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      mobile: '767px',
      // => @media (min-width: 767px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktoplarge: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
