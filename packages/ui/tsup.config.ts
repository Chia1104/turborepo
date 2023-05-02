import { readFile, writeFile } from "fs/promises";
import { defineConfig, type Options } from "tsup";

const client = [
  "./src/client/avatar.tsx",
  "./src/client/button.tsx",
  "./src/client/fade-in.tsx",
  "./src/client/input.tsx",
  "./src/client/modal.tsx",
];

const server = ["./src/server/index.ts", "./src/server/button.tsx"];

export default defineConfig((opts) => {
  const common = {
    dts: true,
    format: ["esm"],
    minify: true,
    outDir: "dist",
  } satisfies Options;

  return [
    {
      ...common,
      entry: ["./src/index.ts", "./src/utils/index.ts", ...server],
    },
    {
      ...common,
      entry: client,
      esbuildOptions: (opts) => {
        opts.banner = {
          js: '"use client";',
        };
      },
      async onSuccess() {
        const pkgJson = <PackageJson>JSON.parse(
          await readFile("./package.json", {
            encoding: "utf-8",
          })
        );
        pkgJson.exports = {
          "./package.json": "./package.json",
          "./src/style/styles.css": "./dist/index.css",
          ".": {
            import: "./dist/index.mjs",
            types: "./dist/index.d.ts",
          },
          "./server": {
            import: "./dist/server/index.mjs",
            types: "./dist/server/index.d.ts",
          },
          "./utils": {
            import: "./dist/utils/index.mjs",
            types: "./dist/utils/index.d.ts",
          },
        };
        [...client]
          .filter((e) => e.endsWith(".tsx"))
          .forEach((entry) => {
            const file = entry.replace("./src/client/", "").replace(".tsx", "");
            pkgJson.exports["./" + file] = {
              import: "./dist/" + file + ".mjs",
              types: "./dist/" + file + ".d.ts",
            };
            pkgJson.typesVersions["*"][file] = ["dist/" + file + ".d.ts"];
          });
        [...server]
          .filter((e) => e.endsWith(".tsx"))
          .forEach((entry) => {
            const file = entry.replace("./src/server/", "").replace(".tsx", "");
            pkgJson.exports["./server/" + file] = {
              import: "./dist/server/" + file + ".mjs",
              types: "./dist/server/" + file + ".d.ts",
            };
            pkgJson.typesVersions["*"][`server/${file}`] = [
              "dist/server/" + file + ".d.ts",
            ];
          });

        await writeFile("./package.json", JSON.stringify(pkgJson, null, 2));
      },
    },
  ];
});

type PackageJson = {
  name: string;
  exports: Record<string, { import: string; types: string } | string>;
  typesVersions: Record<"*", Record<string, string[]>>;
  files: string[];
  dependencies: Record<string, string>;
  pnpm: {
    overrides: Record<string, string>;
  };
};
