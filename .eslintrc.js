const TAILWIND_CONFIG = {
  extends: ["plugin:tailwindcss/recommended"],
  rules: {
    "tailwindcss/classnames-order": "off", // conflicts with prettier-plugin-tailwindcss
    "tailwindcss/no-custom-classname": "off",
  },
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["next-env.d.ts"],
  overrides: [
    {
      files: "**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}",
      extends: [
        "turbo",
        "prettier",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
      },
    },
    // Rules for React files
    {
      files: "**/*.{jsx,tsx}",
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@next/next/recommended",
      ],
      plugins: ["react"],
      rules: {
        "react/prop-types": "off",
        "react/no-unknown-property": "off",
        "react-hooks/exhaustive-deps": "warn",
        "react/self-closing-comp": "error",
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".tsx", ".jsx"], allow: "as-needed" },
        ],
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-boolean-value": "error",
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "@next/next/no-html-link-for-pages": "off",
      },
      settings: {
        react: { version: "detect" },
      },
    },
    // Rules for TypeScript files
    {
      files: "**/*.{ts,tsx,cts,mts}",
      parserOptions: {
        project: [
          "packages/*/tsconfig.json",
          "apps/*/tsconfig.json",
          "tests/*/tsconfig.json",
        ],
      },
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
      },
    },
    {
      ...TAILWIND_CONFIG,
      files: "packages/ui/**",
      plugins: [],
      rules: {
        ...TAILWIND_CONFIG.rules,
      },
    },
    {
      ...TAILWIND_CONFIG,
      files: "apps/next-app/**",
      plugins: [],
      rules: {
        ...TAILWIND_CONFIG.rules,
      },
    },
    {
      ...TAILWIND_CONFIG,
      files: "apps/react-app/**",
      plugins: [],
      rules: {
        ...TAILWIND_CONFIG.rules,
        "@next/next/no-img-element": "off",
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "no-var": "off",
      },
    },
  ],
};
