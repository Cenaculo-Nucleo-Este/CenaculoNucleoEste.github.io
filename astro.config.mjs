import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://cenaculonucleoeste.github.io",
  base: "/CenaculoNucleoEste.github.io/",
  output: 'static',
  integrations: [tailwind(), mdx(), react()],
});
