
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Share, Download, Settings } from "lucide-react";
import RoastCard from "./RoastCard";

const RoastGenerator: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const [currentRoast, setCurrentRoast] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const roastStyles = [
    { id: 'classic', name: 'Classic', emoji: '😏', description: 'Traditional savage roasts' },
    { id: 'brutal', name: 'Brutal', emoji: '💀', description: 'No mercy mode' },
    { id: 'filmy', name: 'Filmy', emoji: '🎬', description: 'Bollywood style burns' },
    { id: 'desi', name: 'Desi', emoji: '🇮🇳', description: 'Pure Indian tadka' },
    { id: 'genz', name: 'Gen-Z', emoji: '💅', description: 'Slay queen vibes' },
    { id: 'influencer', name: 'Influencer', emoji: '📱', description: 'Social media callouts' },
    { id: 'cringe', name: 'Cringe', emoji: '😬', description: 'Maximum awkwardness' },
    { id: 'mild', name: 'Mild', emoji: '😊', description: 'Friendly roasting' }
  ];

  const sampleRoasts = [
    "Bro, gym toh gaya lagta hai, lekin photo sirf mirror se dosti karne aayi hai. 📸💪",
    "Beta, ye filter itna heavy hai ki mera phone hang ho gaya seeing your pic! 😂📱",
    "Arey yaar, crypto bro ban ne se pehle confidence toh invest kar le! 💰😎",
    "Profile dekh ke lagta hai, Netflix ki documentary mein feature hone wala hai - 'Catfish Chronicles' 🐟✨"
  ];

  const generateRoast = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const randomRoast = sampleRoasts[Math.floor(Math.random() * sampleRoasts.length)];
      setCurrentRoast(randomRoast);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 mt-8">
      {/* Roast Style Selector */}
      <Card className="bg-black/30 border border-pink-500/30 p-6">
        <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Choose Your Roast Style 🌶️
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {roastStyles.map((style) => (
            <div
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                selectedStyle === style.id
                  ? 'border-pink-500 bg-pink-500/20'
                  : 'border-gray-600 bg-black/20 hover:border-pink-400'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{style.emoji}</div>
                <div className="font-semibold text-white">{style.name}</div>
                <div className="text-xs text-gray-400">{style.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Generate Button */}
      <div className="text-center">
        <Button
          onClick={generateRoast}
          disabled={isGenerating}
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 text-lg rounded-full transform hover:scale-105 transition-all"
        >
          {isGenerating ? (
            <div className="flex items-center">
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
              AI is cooking your roast... 🔥
            </div>
          ) : (
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 animate-pulse" />
              ROAST ME NOW! 🔥
            </div>
          )}
        </Button>
      </div>

      {/* Generated Roast */}
      {currentRoast && (
        <Card className="bg-gradient-to-br from-orange-900/50 to-pink-900/50 border-2 border-orange-500/50 p-6">
          <div className="text-center space-y-4">
            <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1">
              {roastStyles.find(s => s.id === selectedStyle)?.emoji} {roastStyles.find(s => s.id === selectedStyle)?.name} Roast
            </Badge>
            
            <div className="bg-black/30 rounded-lg p-6 border border-orange-500/30">
              <p className="text-xl font-bold text-white leading-relaxed">
                {currentRoast}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center flex-wrap">
              <Button 
                onClick={generateRoast}
                variant="outline" 
                className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10"
              >
                <Flame className="w-4 h-4 mr-2" />
                Roast Again
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
              >
                <Share className="w-4 h-4 mr-2" />
                Share Roast
              </Button>
              <Button 
                variant="outline" 
                className="border-green-500/30 text-green-300 hover:bg-green-500/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Save as Meme
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Roast Card Preview */}
      {currentRoast && (
        <RoastCard 
          roastText={currentRoast}
          style={selectedStyle}
          onShare={() => console.log('Sharing roast...')}
          onDownload={() => console.log('Downloading roast...')}
        />
      )}
    </div>
  );
};

export default RoastGenerator;
