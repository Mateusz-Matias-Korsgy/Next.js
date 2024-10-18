/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-hero": "url('/src/assets/images/hero.png')",
        "home-hero-bg": "url('/src/assets/images/homehero.png')",
        "professional-hero": "url('/src/assets/images/banner.png')",
        "multimedia-hero":
          "url('/src/assets/images/multimediaserviceshero.png')",
        "multimedia-banner":
          "url('/src/assets/images/multimediaservicesbanner.png')",
        "policy-banner": "url('/src/assets/images/policybanner.png')",
        arrow: "url('/src/assets/images/customer-expectation/bg.png')",
        login: "url('/src/assets/images/login/login-image.png')",
        "bg-line": "url('/src/assets/images/about/bg-line.png')",
        "bg-rectangle": "url('/src/assets/images/services/Rectangle 901.png')",
        bgCareer: "url('/src/assets/images/banner/cover-career.png')",
        bgApply: "url('/src/assets/images/banner/cover-apply.png')",
        bgPricing: "url('/src/assets/images/Banner Pricing Packs.png')",
        bgContactUs: "url('/src/assets/images/contactus/second part of contact.png')",
        bgMultimedia: "url('/src/assets/images/bg-multimedia.png')",
        bgPricing: "url('/src/assets/images/Banner Pricing Packs.png')",
        bgContactUs:
          "url('/src/assets/images/contactus/second part of contact.png')",
        bgProfileBanner: "url('/src/assets/images/banner/profile.png')",
        bgcontactvector: "url('/src/assets/images/subscribe/vectorlarge.png')",
      }),
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["lato", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      grey: "#A7A7A7",
      "grey-rgba": "rgba(217, 217, 217, 0.13)",
      "input-grey-rgba": "rgba(255, 255, 255, 0.12)",
      "subscribe-rgba": "rgba(200, 203, 222, 0.53)",
      "learnmore-gray": "rgba(241,241,241,1)",
      custom1: "rgba(248, 248, 248, 0.34)",
      custom2: "rgba(250, 250, 250, 1)",
      primary: {
        green: "#08AC04",
        blue: "#0F2A6F",
        grey: "#E8E8E8",
        lightGrey: "#F8F8FA",
        red: "#FF0000",
        businessGrey: "#EFEFEF"
      },
      secondary: {
        green: "#084C04",
        blue: "#0F216F",
        grey: "#F8F8F1",
        grey2: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
