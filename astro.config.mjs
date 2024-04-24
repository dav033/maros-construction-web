import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://www.my-site.dev",
  build: {
    inlineStylesheets: "always"
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  ssr: {
    noExternal: ["path-to-regexp"]
  },
  output: "server",
  adapter: netlify()
});