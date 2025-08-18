import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Use a raiz do projeto como root para garantir que o Vite encontre o index.html
  root: path.resolve(__dirname), // Isso faz o Vite procurar o index.html na raiz do projeto
  build: {
    rollupOptions: {
      external: ['/main.js'] // Add the import causing the issue here
    },
  },
});
    // Diretório onde os arquivos gerados pelo Vite serão colocados
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,  // Limpa a pasta dist antes de gerar novos arquivos
  },
});
