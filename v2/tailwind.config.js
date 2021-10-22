// tailwind.config.js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      color: {
        myTeal: `#56caee`,
        myDarkTeal: `#6ca89a8c`,
        myRust: `#8F4700`,
        myLightRust: `#DB832C`,
        myDarkRust: `#211100`
      }
    },
  },
  variants: {},
  plugins: [],
}