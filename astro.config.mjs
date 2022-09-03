import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
