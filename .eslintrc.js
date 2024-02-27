module.exports = {
  extends: ["google", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 12,
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    semi: [2, "never"],
    quotes: [2, "single", "avoid-escape"],
    "comma-dangle": ["error", "never"],
    "no-invalid-this": "off",
    // 'space-in-brackets': ['error', 'always'],
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "quote-props": ["error", "as-needed"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    "valid-jsdoc": [
      "error",
      {
        requireParamType: true,
        requireReturnType: true,
        requireReturn: false,
      },
    ],
    "operator-linebreak": [
      "error",
      "before",
      {
        overrides: {
          "=": "after",
          "==": "after",
          "===": "after",
          "&&": "after",
          "||": "after",
          "+": "after",
          "-": "after",
          "<": "after",
          "<=": "after",
          ">": "after",
          ">=": "after",
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "none",
        semi: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "no-undef": "error",
  },
};
