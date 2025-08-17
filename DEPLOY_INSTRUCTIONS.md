# 🚀 Instruções para Deploy no Netlify

## Problema Identificado
O erro "Git reference refs/heads/main does not exist" indica que o repositório não está configurado corretamente para deploy.

## Solução: Deploy Manual (Mais Rápido)

### Opção 1: Deploy via Drag & Drop
1. Execute o build local:
   ```bash
   vite build
   ```

2. Acesse [Netlify](https://netlify.com) e faça login

3. Arraste a pasta `client/dist` diretamente para a área de deploy do Netlify

4. Site estará online em segundos!

### Opção 2: Deploy via Git (Recomendado)
1. **Criar repositório no GitHub:**
   - Vá para GitHub.com
   - Clique em "New repository" 
   - Nome: `landing-page-vip`
   - Marque "Public"
   - NÃO adicione README (já existe)

2. **Fazer push do código:**
   ```bash
   git init
   git add .
   git commit -m "Landing page inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/landing-page-vip.git
   git push -u origin main
   ```

3. **Conectar ao Netlify:**
   - No Netlify: "New site from Git"
   - Escolher "GitHub"
   - Selecionar repositório `landing-page-vip`
   - Configurações automáticas (netlify.toml já configurado)
   - Deploy!

## Configurações Já Incluídas
✅ `netlify.toml` - configuração de build
✅ `.gitignore` - arquivos ignorados
✅ Build command: `vite build`
✅ Publish directory: `client/dist`
✅ Redirecionamentos para SPA

## Resultado Esperado
- Site funcionando 100% como landing page estática
- Timer de contagem regressiva ativo
- Botões de pagamento PagFácil funcionando
- Design responsivo para mobile e desktop

## Links de Pagamento Configurados
- **Espadinha**: R$9,90 - Link PagFácil já configurado
- **Flerte Quente**: R$14,90 - Link PagFácil já configurado  
- **Proibido**: R$19,90 - Link PagFácil já configurado

🎯 **Após o deploy, seu site estará pronto para conversões!**