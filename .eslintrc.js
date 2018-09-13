module.exports = {
  "parser": "babel-eslint",


  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "strict": 0,
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "no-console": "off",
    "no-unused-vars": "warn"
  }
};