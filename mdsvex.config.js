import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { fileURLToPath } from "url";
import * as path from "path";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = defineConfig({
  extensions: [".md", ".svx", ".svelte"],
  smartypants: { dashes: "oldschool" },
  layout: {
    pasos: path.join(dirname, "./src/routes/pasos/layout.svelte"),
  },
});

export default config;
