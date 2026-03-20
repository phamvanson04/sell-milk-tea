const reactNative = require("eslint-plugin-react-native");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "react-native/no-raw-text": "error",
    },
  },
];
