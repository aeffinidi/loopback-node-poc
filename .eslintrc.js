module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'prettier', 
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: "latest", // Allows the use of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  env: {
    node: true, // Enable Node.js global variables
    es6: true
  },
};
