# Landing Page - Promoção VIP

Uma landing page brasileira otimizada para conversão com três planos de assinatura, timer de contagem regressiva e design persuasivo.

## Deploy no Netlify

### Passos para deploy:

1. **Conectar repositório**: 
   - Faça push do projeto para um repositório GitHub
   - Conecte sua conta Netlify ao repositório

2. **Configurações de build**:
   - Build command: `npm run build`
   - Publish directory: `client/dist`
   - Node version: `18`

3. **Configuração automática**:
   - O arquivo `netlify.toml` já está configurado
   - Redirecionamentos configurados para SPA

## Tecnologias

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Pagamentos**: PagFácil (links diretos)
- **Deploy**: Netlify (static site)

## Funcionalidades

- ✅ Timer de contagem regressiva
- ✅ 3 planos de preço com features comparativas  
- ✅ Design responsivo otimizado para conversão
- ✅ Integração com gateway de pagamento brasileiro
- ✅ Indicadores de segurança e confiança
- ✅ Texto persuasivo com emojis estratégicos

## Comandos

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar tipos
npm run check
```