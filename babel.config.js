// Required so Turbopack routes user files through Babel and
// babel-plugin-transform-react-jsx-location can inject data-source
// attrs for the Kodagen Builder's click-to-edit overlay.
module.exports = {
  presets: ["next/babel"],
  plugins: ["transform-react-jsx-location"],
};
