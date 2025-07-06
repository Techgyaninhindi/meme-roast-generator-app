
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Flame, Share, Download, Settings, Sparkles } from "lucide-react";
import RoastCard from "./RoastCard";
import { useAdManager } from "@/hooks/useAdManager";
import { aiRoastService, RoastRequest } from "@/services/aiService";

const RoastGenerator: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const [currentRoast, setCurrentRoast] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userBio, setUserBio] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [roastHistory, setRoastHistory] = useState<string[]>([]);
  const { checkInterstitialAd } = useAdManager();

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

  const generateRoast = async () => {
    setIsGenerating(true);
    
    try {
      // Set API key if provided
      if (apiKey) {
        aiRoastService.setApiKey(apiKey);
      }

      const request: RoastRequest = {
        style: selectedStyle,
        userBio: userBio || undefined,
        previousRoasts: roastHistory
      };

      const response = await aiRoastService.generateRoast(request);
      
      setCurrentRoast(response.roast);
      setRoastHistory(prev => [...prev, response.roast]);
      
      // Trigger ad check after roast generation
      checkInterstitialAd();
    } catch (error) {
      console.error('Roast generation failed:', error);
      setCurrentRoast("AI got roasted by technical difficulties! Try again 😅");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6 mt-8">
      {/* AI API Key Input */}
      <Card className="bg-black/30 border border-green-500/30 p-4">
        <h4 className="text-lg font-bold mb-2 text-green-400 flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          AI Configuration (Optional)
        </h4>
        <Input
          type="password"
          placeholder="Enter OpenAI API Key for better results (optional)"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="bg-black/50 border-green-500/30 text-white placeholder-gray-400"
        />
        <p className="text-xs text-gray-400 mt-1">
          Leave empty to use demo mode. Get API key from OpenAI platform.
        </p>
      </Card>

      {/* User Bio Input */}
      <Card className="bg-black/30 border border-blue-500/30 p-4">
        <h4 className="text-lg font-bold mb-2 text-blue-400">Tell us about yourself</h4>
        <Input
          placeholder="e.g., Gym freak, Crypto bro, Foodie, Student..."
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
          className="bg-black/50 border-blue-500/30 text-white placeholder-gray-400"
        />
        <p className="text-xs text-gray-400 mt-1">
          This helps AI generate more personalized roasts!
        </p>
      </Card>

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

      {/* Roast History Summary */}
      {roastHistory.length > 0 && (
        <Card className="bg-black/20 border border-purple-500/30 p-4">
          <h4 className="text-lg font-bold text-purple-400 mb-2">
            🔥 Generated {roastHistory.length} unique roasts this session!
          </h4>
          <p className="text-sm text-gray-400">
            AI is learning your style to avoid repetition.
          </p>
        </Card>
      )}
    </div>
  );
};

export default RoastGenerator;
