import { Check, X, Crown, Gift, ShieldCheck, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  type: 'basic' | 'intermediate' | 'vip';
  title: string;
  subtitle?: string;
  price: string;
  features: Array<{
    text: string;
    included: boolean;
    highlight?: boolean;
  }>;
  buttonText: string;
  isPopular?: boolean;
  onPurchase: () => void;
}

export function PricingCard({ 
  type, 
  title, 
  subtitle, 
  price, 
  features, 
  buttonText, 
  isPopular = false,
  onPurchase 
}: PricingCardProps) {
  const getCardStyles = () => {
    switch (type) {
      case 'basic':
        return "bg-gray-800/80 backdrop-blur-sm border border-gray-600";
      case 'intermediate':
        return "bg-orange-900/80 backdrop-blur-sm border-2 border-orange-500";
      case 'vip':
        return "bg-yellow-900/80 backdrop-blur-sm border-2 border-yellow-400";
      default:
        return "bg-gray-800/80 backdrop-blur-sm border border-gray-600";
    }
  };

  const getButtonStyles = () => {
    switch (type) {
      case 'basic':
        return "bg-gray-700 hover:bg-gray-600 text-white";
      case 'intermediate':
        return "bg-orange-600 hover:bg-orange-500 text-white shadow-lg";
      case 'vip':
        return "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white shadow-lg animate-pulse";
      default:
        return "bg-gray-700 hover:bg-gray-600 text-white";
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'basic':
        return <Clock className="text-4xl text-gray-400" />;
      case 'intermediate':
        return <Flame className="text-4xl text-orange-400" />;
      case 'vip':
        return <Crown className="text-4xl text-yellow-400" />;
      default:
        return <Clock className="text-4xl text-gray-400" />;
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'basic':
        return "text-gray-300";
      case 'intermediate':
        return "text-orange-100";
      case 'vip':
        return "text-yellow-100";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div className={`${getCardStyles()} rounded-2xl p-8 relative transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            MAIS VENDIDO
          </div>
        </div>
      )}
      
      <div className={`text-center mb-6 ${isPopular ? 'mt-4' : ''}`}>
        <div className="flex justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        {subtitle && (
          <p className="text-yellow-400 text-sm font-semibold mb-3">{subtitle}</p>
        )}
        <div className="text-5xl font-extrabold text-white mb-4">{price}</div>
      </div>
      
      <ul className={`space-y-3 mb-8 ${getTextColor()}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <Check className="text-green-400 mr-3 flex-shrink-0" />
            ) : (
              <X className="text-red-400 mr-3 flex-shrink-0" />
            )}
            <span className={feature.highlight ? 'font-semibold' : ''}>
              {feature.text}
              {feature.text.includes('🎁') && <Gift className="inline ml-1 text-yellow-400" size={16} />}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${getButtonStyles()} font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}
        onClick={onPurchase}
      >
        {type === 'vip' && <Crown className="mr-2" size={16} />}
        {buttonText}
      </Button>
    </div>
  );
}
