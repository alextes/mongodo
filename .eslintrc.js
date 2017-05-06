module.exports = {
  extends: "airbnb-base",

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 7,
    sourceType: "script",
  },

  plugins: [
    "promise",
    "import"
  ],

  rules: {
    "promise/avoid-new": "warn",
    "promise/catch-or-return": "error",
    "promise/param-names": "error",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
  }
}
