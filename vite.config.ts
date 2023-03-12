import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

// https://vitejs.dev/config/
/// <reference types="vitest" />
/// <reference types="vite/client" />

export default defineConfig({
    plugins: [react()],
});
