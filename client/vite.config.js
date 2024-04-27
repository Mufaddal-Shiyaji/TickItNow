import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: "0.0.0.0", // Set to '0.0.0.0' to allow external access
    strictPort: true,
    port: 5000, // you can replace this port with any port
  },
});
