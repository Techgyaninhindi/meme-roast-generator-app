
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BannerAdProps {
  position?: 'top' | 'bottom' | 'inline';
  closeable?: boolean;
}

const BannerAd: React.FC<BannerAdProps> = ({ position = 'inline', closeable = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [adContent] = useState({
    title: "Upgrade Your Gaming Setup! 🎮",
    description: "Get 50% off on premium gaming headphones",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=150&fit=crop",
    cta: "Shop Now",
    brand: "GameZone"
  });

  if (!isVisible) return null;

  return (
    <Card className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 p-4 ${
      position === 'top' ? 'mb-4' : position === 'bottom' ? 'mt-4' : 'my-4'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={adContent.image} 
            alt="Ad" 
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h4 className="text-white font-semibold">{adContent.title}</h4>
            <p className="text-gray-300 text-sm">{adContent.description}</p>
            <span className="text-xs text-blue-400">Sponsored by {adContent.brand}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            onClick={() => console.log('Ad clicked')}
          >
            {adContent.cta}
          </Button>
          {closeable && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BannerAd;
