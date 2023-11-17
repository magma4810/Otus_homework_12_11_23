module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js", "babel.config.js", "jest.config.js"],
  plugins: ["jest"],
  "rules": {
    "no-console": "off",
    "no-restricted-syntax": [
        "error",
        {
            "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
            "message": "Unexpected property on console object was called"
        }
    ]
},
  overrides: [
    {
      files: [".eslintrc.js", "babel.config.js", "jest.config.js"],
      env: {
        node: true, // Apply Node environment specifically for ESLint config
      },
    },
  ],
};
