import { useState } from "react";
import { Flame, Shield, Lock, Smartphone } from "lucide-react";
import { CountdownTimer } from "@/components/countdown-timer";
import { PricingCard } from "@/components/pricing-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import featuredImage from "@assets/GLNQ9zTXIAA2_y3.jpg";

export default function Home() {
  const { toast } = useToast();

  const handlePurchase = (plan: string, redirectUrl: string) => {
    // Redirect to the payment page
    window.open(redirectUrl, '_blank');
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
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <Flame className="h-16 w-16 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Última Chance: Desbloqueie o Acesso VIP 
              <span className="text-yellow-400"> com Ela por Apenas</span>
            </h1>
            <div className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8">
              R$9,90!
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Essa é a sua <span className="text-yellow-400 font-bold">única oportunidade</span> de entrar direto e sem censura. Essa condição não vai aparecer de novo.
              </p>
              <p className="text-lg text-[#d1d5db]">
                Tudo liberado agora por um <span className="text-yellow-400 font-bold">valor simbólico.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-gradient-to-r from-yellow-600/20 to-red-600/20 p-6 rounded-2xl border-2 border-yellow-400/50 shadow-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-2xl blur-sm"></div>
              <div className="relative">
                <img
                  src={featuredImage}
                  alt="Conteúdo exclusivo"
                  className="w-full h-96 object-cover rounded-xl shadow-lg mx-auto mt-[0px] mb-[0px] pl-[0px] pr-[0px] pt-[0px] pb-[0px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            <PricingCard
              type="basic"
              title="Espadinha"
              subtitle="Primeiro Contato • Entrada"
              price="R$9,90"
              features={basicFeatures}
              buttonText="Quero o acesso básico"
              onPurchase={() => handlePurchase("Espadinha", "https://pagfacil.online/checkout/cmeeutc1t060nn1qwqwmioo1g?offer=110ABFD")}
            />
            
            <PricingCard
              type="intermediate"
              title="Flerte Quente"
              subtitle="Experiência Completa • Popular"
              price="R$14,90"
              features={intermediateFeatures}
              buttonText="Quero o plano completo"
              onPurchase={() => handlePurchase("Flerte Quente", "https://pagfacil.online/checkout/cmeeutqtn064ygdsdh9lgyqx7?offer=IAMXU85")}
            />
            
            <PricingCard
              type="vip"
              title="Proibido"
              subtitle="VIP de Verdade • Melhor Valor"
              price="R$19,90"
              features={vipFeatures}
              buttonText="QUERO O PROIBIDO AGORA!"
              isPopular={true}
              onPurchase={() => handlePurchase("Proibido", "https://pagfacil.online/checkout/cmeeuu4dl05v658qc5bdqaxml?offer=JXQK71D")}
            />
          </div>
        </div>
      </section>
      {/* Security and Trust Section */}
      <section className="py-12 border-t border-gray-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-3 text-green-400">
              <Shield className="h-8 w-8" />
              <span className="text-white font-semibold">Compra 100% segura</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-400">
              <Lock className="h-8 w-8" />
              <span className="text-white font-semibold">Sigilo absoluto na fatura</span>
            </div>
            <div className="flex items-center space-x-3 text-purple-400">
              <Smartphone className="h-8 w-8" />
              <span className="text-white font-semibold">Acesso imediato no celular</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p>© 2024 - Todos os direitos reservados. Conteúdo para maiores de 18 anos.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
