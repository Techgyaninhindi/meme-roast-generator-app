
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Clock } from "lucide-react";

interface InterstitialAdProps {
  isVisible: boolean;
  onClose: () => void;
  skipTime?: number;
}

const InterstitialAd: React.FC<InterstitialAdProps> = ({ 
  isVisible, 
  onClose, 
  skipTime = 5 
}) => {
  const [countdown, setCountdown] = useState(skipTime);
  const [canSkip, setCanSkip] = useState(false);

  const [adContent] = useState({
    title: "Foodie Paradise Awaits! 🍕",
    description: "Order your favorite food with 60% off on first order",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    cta: "Order Now",
    brand: "FoodExpress",
    discount: "60% OFF"
  });

  useEffect(() => {
    if (!isVisible) return;

    setCountdown(skipTime);
    setCanSkip(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanSkip(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, skipTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="bg-gradient-to-br from-orange-900 to-red-900 border border-orange-500/30 p-0 max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="relative">
          <img 
            src={adContent.image} 
            alt="Ad" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2">
            {canSkip ? (
              <Button 
                onClick={onClose}
                variant="ghost" 
                size="sm"
                className="bg-black/50 text-white hover:bg-black/70 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            ) : (
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {countdown}s
              </div>
            )}
          </div>
          <div className="absolute bottom-2 left-2">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {adContent.discount}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{adContent.title}</h3>
            <p className="text-gray-300">{adContent.description}</p>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3"
            onClick={() => {
              console.log('Interstitial ad clicked');
              onClose();
            }}
          >
            {adContent.cta}
          </Button>

          <div className="text-center">
            <span className="text-xs text-gray-400">Sponsored by {adContent.brand}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InterstitialAd;
