import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  output: "server",
  adapter: netlify(),
  adapter: netlify({
    edgeMiddleware: true,
  }),

  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
});
