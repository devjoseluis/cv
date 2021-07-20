/**
 * @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config}
 */

/* eslint-env commonjs */

module.exports = {
  extends: [
    "eslint:recommended", // ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "next", // Next.js and React rules
    "next/core-web-vitals", // Core Web Vitals rules
    "prettier", // Prettier rules
  ],
  plugins: ["@typescript-eslint", "jsx-a11y"],
};
