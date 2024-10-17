import js from "@eslint/js";
import globals from "globals";
import storybook from "eslint-plugin-storybook";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPluginX from "eslint-plugin-import-x";
import tsParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      // ...storybook.configs["flat/recommended"],
      importPluginX.flatConfigs.recommended,
      importPluginX.flatConfigs.typescript,
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    ignores: ["node_modules", ".yarn/**/*", ".pnp.cjs", ".pnp.loader.mjs"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-unused-vars": "off",
      "import-x/no-dynamic-require": "warn",
      "import-x/no-nodejs-modules": "warn",
      "import-x/order": [
        "error",
        {
          "newlines-between": "always",
          distinctGroup: true,
          warnOnUnassignedImports: true,
          groups: ["type", "builtin", "external", "internal", "parent", "sibling", "index", "unknown"],
          pathGroups: [
            {
              pattern: "react**",
              group: "external",
              position: "before",
            },
            {
              pattern: "api/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "contexts/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "utils/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "styles/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "navigations/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "screens/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "./**",
              group: "sibling",
              position: "after",
            },
            {
              pattern: "../**",
              group: "parent",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "type"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
