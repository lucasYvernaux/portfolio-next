import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Règle locale : interdit l'import de modules server-only
 * dans un fichier marqué "use client".
 */
const noServerOnlyInClient = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Interdit l'import de modules server-only dans un fichier 'use client'",
    },
    schema: [
      {
        type: "object",
        properties: {
          restricted: { type: "array", items: { type: "string" } },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      forbidden:
        "'{{source}}' est un module server-only : import interdit dans un fichier 'use client'.",
    },
  },
  create(context) {
    const options = context.options[0] ?? {};
    const restricted = options.restricted ?? [
      "server-only",
      "@/config/env/server",
    ];
    let isClientFile = false;

    return {
      Program(node) {
        const first = node.body[0];
        isClientFile =
          first?.type === "ExpressionStatement" &&
          first.expression.type === "Literal" &&
          first.expression.value === "use client";
      },
      ImportDeclaration(node) {
        if (!isClientFile) return;
        const source = node.source.value;
        const isRestricted = restricted.some(
          (r) => source === r || source.startsWith(`${r}/`),
        );
        if (isRestricted) {
          context.report({ node, messageId: "forbidden", data: { source } });
        }
      },
    };
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      local: { rules: { "no-server-only-in-client": noServerOnlyInClient } },
    },
    rules: {
      "local/no-server-only-in-client": [
        "error",
        { restricted: ["server-only", "@/config/env/server"] },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
