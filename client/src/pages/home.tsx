import { useState } from "react";
import { Flame, Shield, Lock, Smartphone } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { PricingCard } from "@/components/pricing-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import featuredImage from "@assets/GE5A23UX0AE7JNw_1755393526704.jpg";

export default function Home() {
  const { toast } = useToast();

  const handlePurchase = async (plan: string, price: string) => {
    try {
      // For demo purposes, we'll use a placeholder email
      // In a real app, this would come from a form or user session
      const email = `user-${Date.now()}@example.com`;
      
      await apiRequest('POST', '/api/purchase', {
        email,
        plan,
        price
      });

      toast({
        title: "Compra realizada com sucesso!",
        description: `Plano ${plan} adquirido por ${price}. Você receberá um email com as instruções.`,
      });
    } catch (error) {
      toast({
        title: "Erro na compra",
        description: "Não foi possível processar sua compra. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const basicFeatures = [
    { text: "Apenas 1 mês de acesso ao conteúdo", included: true },
    { text: "Sem chamada", included: false },
    { text: "Sem bônus", included: false },
    { text: "Sem grupo", included: false },
  ];

  const intermediateFeatures = [
    { text: "3 meses de acesso ao conteúdo", included: true },
    { text: "Chamada de 15 minutos com a modelo", included: true },
    { text: "Acesso ao grupo no Telegram", included: true },
    { text: "5 vídeos secretos bônus", included: true },
  ];

  const vipFeatures = [
    { text: "12 meses de acesso total", included: true, highlight: true },
    { text: "1 chamada exclusiva de 40 minutos", included: true, highlight: true },
    { text: "Conteúdo secreto: 10 vídeos + 30 fotos", included: true, highlight: true },
    { text: "Conteúdo personalizado sob pedido", included: true, highlight: true },
    { text: "Grupo ULTRA VIP exclusivo", included: true, highlight: true },
    { text: "Só no perfil + destaque no atendimento", included: true },
    { text: "Brinde surpresa após 30 dias 🎁", included: true },
    { text: "Garantia de 7 dias", included: true, highlight: true },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-red-gradient -z-10"></div>
      
      {/* Countdown Timer Header */}
      <CountdownTimer />

      {/* Hero Section */}
      <section className="pt-12 pb-8 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Flame className="h-16 w-16 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Última Chance: Desbloqueie o Acesso VIP 
              <span className="text-yellow-400"> com Ela por Apenas</span>
            </h1>
            <div className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-6">
              R$9,90!
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Essa é a sua <span className="text-yellow-400 font-bold">única oportunidade</span> de entrar direto e sem censura. Essa condição não vai aparecer de novo.
            </p>
            <p className="text-lg text-gray-400">
              Tudo liberado agora por um <span className="text-yellow-400 font-bold">valor simbólico.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-r from-yellow-600/20 to-red-600/20 p-6 rounded-2xl border-2 border-yellow-400/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-2xl blur-sm"></div>
              <div className="relative">
                <img
                  src={featuredImage}
                  alt="Conteúdo exclusivo"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <PricingCard
              type="basic"
              title="Espadinha"
              price="R$9,90"
              features={basicFeatures}
              buttonText="Quero o acesso básico"
              onPurchase={() => handlePurchase("Espadinha", "R$9,90")}
            />
            
            <PricingCard
              type="intermediate"
              title="Fierte Quente"
              price="R$14,90"
              features={intermediateFeatures}
              buttonText="Quero o plano completo"
              onPurchase={() => handlePurchase("Fierte Quente", "R$14,90")}
            />
            
            <PricingCard
              type="vip"
              title="Proibido"
              subtitle="VIP de Verdade • Melhor Valor"
              price="R$19,90"
              features={vipFeatures}
              buttonText="QUERO O PROIBIDO AGORA!"
              isPopular={true}
              onPurchase={() => handlePurchase("Proibido", "R$19,90")}
            />
          </div>
        </div>
      </section>

      {/* Security and Trust Section */}
      <section className="py-8 border-t border-gray-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 text-center">
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="h-8 w-8" />
              <span className="text-white font-semibold">Compra 100% segura</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Lock className="h-8 w-8" />
              <span className="text-white font-semibold">Sigilo absoluto na fatura</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Smartphone className="h-8 w-8" />
              <span className="text-white font-semibold">Acesso imediato no celular</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© 2024 - Todos os direitos reservados. Conteúdo para maiores de 18 anos.</p>
        </div>
      </footer>
    </div>
  );
}
