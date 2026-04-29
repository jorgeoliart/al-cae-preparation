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
        caeW3S4L1: resolve(__dirname, 'cae_listening_p4_w3_01.html'),
        listeningP4W3: resolve(__dirname, 'cae_listening_p4_w3_01.mp3'),
        listeningP1W4: resolve(__dirname, 'cae_listening_p1_w4_01.html'),
        listeningP2W4: resolve(__dirname, 'cae_listening_p2__w4_01.html'),
        listeningP2_2W4: resolve(__dirname, 'cae_listening_p1_w4_02_radio.html'),
        W5_cae_uoe_p1_comparison: resolve(__dirname, 'week5_cae_uoe_comparison_P1-01.html'),
        W5_cae_uoe_p2_comparison: resolve(__dirname, 'week5_cae_uoe_comparison-P2-01.html'),
        // Add new session entries here
      }
    }
  }
})