/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeOneVeryDarkDesaturatedBlueMain: "hsl(222, 26%, 31%)",
        themeOneVeryDarkDesaturatedBlueToggle: "hsl(223, 31%, 20%)",
        themeOneVeryDarkDesaturatedBlueScreen: "hsl(224, 36%, 15%)",
        themeOneDesaturatedDarkBlueKeybg: "hsl(225, 21%, 49%)",
        themeOneDesaturatedDarkBlueKeyshadow: "hsl(224, 28%, 35%)",
        themeOneRed: "hsl(6, 63%, 50%)",
        themeOneDarkRed: "hsl(6, 70%, 34%)",
        themeOneLightGrayishOrange: "hsl(30, 25%, 89%)",
        themeOneGrayishOrange: "hsl(28, 16%, 65%)",
        themeOneVeryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        themeOneWhite: "hsl(0, 0%, 100%)",
        themeOneHoverLightBlue: "hsl(224, 76.20%, 80.20%)",
        themeOneHoverLightRed: "hsl(6, 94.40%, 71.80%)",
        // Theme Two
        themeTwoLightGrayBg: "hsl(0, 0%, 90%)",
        themeTwoGrayishRed: "hsl(0, 5%, 81%)",
        themeTwoVeryLightGrayScreen: "hsl(0, 0%, 93%)",
        themeTwoDarkModerateCyanBg: "hsl(185, 42%, 37%)",
        themeTwoHoverLightCyan: "hsl(185, 41.10%, 58.00%)",
        themeTwoVeryDarkCyanShadow: "hsl(185, 58%, 25%)",
        themeTwoOrange: "hsl(25, 98%, 40%)",
        themeTwoHoverLightOrange: "hsl(25, 97.80%, 64.70%)",
        themeTwoDarkOrange: "hsl(25, 99%, 27%)",
        themeTwoLightGrayishYellow: "hsl(45, 7%, 89%)",
        themeTwoDarkGrayishOrange: "hsl(35, 11%, 61%)",
        themeTwoVeryDarkGrayishYellow: "hsl(60, 10%, 19%)",
        themeTwoWhite: "hsl(0, 0%, 100%)",
        
        // Theme Three
        themeThreeVeryDarkViolet: "hsl(268, 75%, 9%)",
        themeThreeVeryDarkVioletBg: "hsl(268, 71%, 12%)",
        themeThreeDarkVioletBg: "hsl(281, 89%, 26%)",
        themeThreeVividMagentaShadow: "hsl(285, 91%, 52%)",
        themeThreePureCyanBg: "hsl(176, 100%, 44%)",
        themeThreeSoftCyanShadow: "hsl(177, 92%, 70%)",
        themeThreeVeryDarkVioletKeyBg: "hsl(268, 47%, 21%)",
        themeThreeDarkMagenta: "hsl(290, 70%, 36%)",
        themeThreeLightYellow: "hsl(52, 100%, 62%)",
        themeThreeVeryDarkBlue: "hsl(198, 20%, 13%)",
        themeThreeWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spartan: ["LeagueSpartan", "sans-serif"],
        sans: ["spartan", "sans-serif" , ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
