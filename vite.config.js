import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: {},
  },
  server: {
    port: 3005,
  },
  envPrefix: "VITE_",
});
