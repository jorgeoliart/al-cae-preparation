import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        caeS1W1: resolve(__dirname, 'cae_s1_w1_passive_constructions.html'),
        caeS2W1: resolve(__dirname, 'cae_s2_w1_passive_constructions.html'),
        caeS3W1: resolve(__dirname, 'cae_s3_w1_reading.html'),
        caeS4W1: resolve(__dirname, 'cae_s4_w1_reading.html'),
        caeS1W2: resolve(__dirname, 'cae_s1_w2_modals.html'),
        caeS2W2: resolve(__dirname, 'cae_s2_w2_modals.html'),
        caeS3W2: resolve(__dirname, 'cae_s3_w2_reading.html'),
        caeW3S2: resolve(__dirname, 'cae_listening_p1_w3_01.html'),
        listeningP1W3: resolve(__dirname, 'cae_listening_p1_w3_01.html'),
        // Add new session entries here
      }
    }
  }
})