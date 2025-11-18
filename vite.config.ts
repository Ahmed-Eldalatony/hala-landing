import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      "halakommers.com",
      "seller.halakommers.com",
      "admin.halakommers.com",
      "api.halakommers.com",
    ],
  },
  preview: {
    allowedHosts: [
      "seller.halakommers.com",
      "halakommers.com",
      "seller.halakommers.com",
      "admin.halakommers.com",
      "api.halakommers.com",
    ],
  },
});
