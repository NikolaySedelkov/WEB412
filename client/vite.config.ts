import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Для клиентской части настроить Proxy

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Конфиг для сервера клиентской части
  server: {
    // Прокси - объект в виде endpoint'ов, которые нужно будет переадресовывать на другие домены
    proxy: {
      // Все запросы начинающиеся с `/api` будут переадресованны на домен `http://localhost:9012`
      // Переадресация не в браузере, на сервере приложения
      '/api': 'http://localhost:9012'
    }
  }
})
