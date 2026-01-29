import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig({
  plugins: [vue()],

  // 声明根路径！
  resolve: {
    alias: {
      // 配置@指向src目录
      '@': path.resolve(__dirname, './src')
    }
  },

  //放行
  server: {
    host: '0.0.0.0', // 允许局域网访问
    port: 55010,      // 端口号
    // 可选：如果需要自动打开浏览器，可添加
    // open: true
  }

})