import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://cenaculonucleoeste.github.io",
  base: "/",
  integrations: [tailwind()],
  output: "server",
});
