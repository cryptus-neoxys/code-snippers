module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    nightwind: {
      colorClasses: [
        "gradient",
        "ring",
        "ring-offset",
        "divide",
        "placeholder",
      ],
    },
  },
  variants: {
    nightwind: ["focus"], // Add any Tailwind variant
  },
  plugins: [require("nightwind")],
};
