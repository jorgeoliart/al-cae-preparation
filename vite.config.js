import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        caeS1W1: resolve(__dirname, 'cae_s1_w1_passive_constructions.html'),
        caeS2W1: resolve(__dirname, 'cae_s2_w1_passive_constructions.html'),
        // Add new session entries here
      }
    }
  }
})