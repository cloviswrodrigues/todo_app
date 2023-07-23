/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "hsl(0, 0%, 98%)",
      "gray-very-light": "hsl(236, 33%, 92%)",
      "gray-light": "hsl(233, 11%, 84%)",
      "gray-dark": "hsl(236, 9%, 61%)",
      "gray-very-dark": "hsl(235, 19%, 35%)",
      "blue-very-dark": "hsl(235, 21%, 11%)",
      "blue-very-dark-desaturated": "hsl(235, 24%, 19%)",
      "blue-light": "hsl(234, 39%, 85%)",
      "blue-light-hover": "hsl(236, 33%, 92%)",
      "blue-grayish-dark": "hsl(234, 11%, 52%)",
      "blue-very-dark-grayish": "hsl(233, 14%, 35%)",
      "blue-very-dark-grayish-2": "hsl(237, 14%, 26%)",
      white: "white",
    },
    extend: {
      backgroundImage: {
        "header-mobile": "url(../assets/images/bg-mobile-light.jpg)",
      },
    },
    letterSpacing: {
      widest: ".8rem",
    },
  },
  plugins: [],
};
