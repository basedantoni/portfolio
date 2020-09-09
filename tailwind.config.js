module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: ['tailwindcss', 'postcss-preset-env'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
