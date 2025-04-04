import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	root: __dirname,
	base: "./",
	build: {
		outDir: path.resolve(__dirname, "dist"),
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
			},
		},
	},
	server: {
		open: true,
		port: 3000,
	},
});
