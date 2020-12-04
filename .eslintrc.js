module.exports = {
  plugins: ["react"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    }
  },
  rules: {
    "react/prop-types": "error"
  }
};
