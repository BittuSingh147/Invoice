import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Allow unused variables when they start with _
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }],
      // Allow empty interfaces
      "@typescript-eslint/no-empty-interface": "off",
      // Allow any type where necessary
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow empty object type
      "@typescript-eslint/no-empty-object-type": "off",
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "off"
    },
  },
];

export default eslintConfig;

