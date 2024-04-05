module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // New plugin for custom utilities
    tailwindcssAnimate: require("tailwindcss-animate"), // Existing plugin
    // New plugin for custom utilities
    customUtilities: ({ matchUtilities, theme }) => {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            'animation-delay': value,
          };
        },
      });
    },
  },
};
