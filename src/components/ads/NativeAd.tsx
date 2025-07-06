
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const NativeAd: React.FC = () => {
  const adContent = {
    title: "Learn to Code Like a Pro! 💻",
    description: "Master React, Node.js, and more with our interactive courses. Join 1M+ developers!",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop",
    cta: "Start Free Trial",
    brand: "CodeMaster",
    rating: 4.8,
    reviews: "12k+"
  };

  return (
    <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-4">
      <div className="flex items-start space-x-4">
        <img 
          src={adContent.image} 
          alt="Ad" 
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="border-green-500/30 text-green-300 text-xs">
              Sponsored
            </Badge>
            <div className="flex items-center text-yellow-400 text-sm">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {adContent.rating} ({adContent.reviews})
            </div>
          </div>
          
          <h4 className="text-white font-semibold">{adContent.title}</h4>
          <p className="text-gray-300 text-sm line-clamp-2">{adContent.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-400">{adContent.brand}</span>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
              onClick={() => console.log('Native ad clicked')}
            >
              {adContent.cta}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NativeAd;
