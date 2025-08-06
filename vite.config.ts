import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root path for custom domain, subdirectory for GitHub Pages
  base: mode === 'production' && process.env.GITHUB_PAGES ? '/qbitt/' : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only enable Lovable tagger in development AND when explicitly requested
    mode === 'development' && process.env.LOVABLE_DEV === 'true' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
