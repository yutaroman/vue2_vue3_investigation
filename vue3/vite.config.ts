import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // Vue3 での空白文字の扱い
        whitespace: 'condense'
        // Vue2 での空白文字の扱い
        // whitespace: 'preserve'
      }
    }
  })]
})
