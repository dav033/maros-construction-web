import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import { imagetools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), imagetools()],
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
