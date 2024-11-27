
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto sans-serif"],
        poppins: ["Poppins, sans-serif"],
        lato: ["Lato, sans-serif"],
        kanit: ["Kanit, sans-serif"],
      },
      colors: {
        navBgColor: "rgba(255, 255, 255, 0.1)", // Corrected key for nav background
        bgColor: "#171f2b", // Background color
        secondBgColor: "#1f2733", // Secondary background color
        thirdBgColor: "#2d3542", // Tertiary background color
        mainColor: "#0ef", // Main color
        whiteColor: "#ffffff", // White color
        tabListColor: "#7c8594", // Tab list color
      },
      backgroundColor: {
        navBgColor: "rgba(255, 255, 255, 0.1)", // Corrected key for nav background
        bgColor: "#171f2b", // Background color
        secondBgColor: "#1f2733", // Secondary background color
        thirdBgColor: "#2d3542", // Tertiary background color
        mainColor: "#0ef", // Main color
        whiteColor: "#ffffff", // White color
        tabListColor: "#7c8594", // Tab list color
      },
      textColor: {
        navBgColor: "rgba(255, 255, 255, 0.1)", // Corrected key for nav background
        bgColor: "#171f2b", // Background color
        secondBgColor: "#1f2733", // Secondary background color
        thirdBgColor: "#2d3542", // Tertiary background color
        mainColor: "#0ef", // Main color
        whiteColor: "#ffffff", // White color
        tabListColor: "#7c8594", // Tab list color
      },
      borderColor: {
        navBgColor: "rgba(255, 255, 255, 0.1)", // Corrected key for nav background
        bgColor: "#171f2b", // Background color
        secondBgColor: "#1f2733", // Secondary background color
        thirdBgColor: "#2d3542", // Tertiary background color
        mainColor: "#0ef", // Main color
        whiteColor: "#ffffff", // White color
        tabListColor: "#7c8594", // Tab list color
      },
      boxShadow: {
        btnShadow: '0 0 1rem #0ef',
        imgShadow: '0 0 2rem #0ef',
        hoverShadow: '0 0 5rem #0ef',
      },
      animation: {
        'spin-slow' : 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

