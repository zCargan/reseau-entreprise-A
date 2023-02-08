import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	server: { host: "0.0.0.0" },
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	plugins: [svgr(), react()],
	build: {
		outDir: "./build",
	},
});
