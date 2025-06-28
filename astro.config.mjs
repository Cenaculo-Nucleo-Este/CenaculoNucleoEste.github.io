import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import staticAdapter from '@astrojs/adapter-static';

// https://astro.build/config
export default defineConfig({
  site: "https://cenaculonucleoeste.github.io",
  adapter: staticAdapter(),
  base: "/CenaculoNucleoEste.github.io/",
  integrations: [tailwind()],
});
