import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "",
  integrations: [react(), solidJs()],
  output: "hybrid",
  adapter: netlify()
});