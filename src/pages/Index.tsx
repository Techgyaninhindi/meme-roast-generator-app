
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Upload, Users, Camera, Settings, Star } from "lucide-react";
import UploadSection from "@/components/UploadSection";
import RoastGenerator from "@/components/RoastGenerator";
import RoastHistory from "@/components/RoastHistory";
import AuthModal from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const [activeTab, setActiveTab] = useState("roast");
  const [showAuth, setShowAuth] = useState(false);
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-pink-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 text-orange-300 animate-ping opacity-30">
                <Flame className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              AI Profile Roaster
            </h1>
          </div>
          <Button 
            onClick={() => setShowAuth(true)}
            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold"
          >
            {isAuthenticated ? `Hi ${user?.name}!` : "Login"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Get ROASTED by AI! 🔥
          </h2>
          <p className="text-xl text-pink-200 mb-2">Upload your pic, get savage Hinglish roasts!</p>
          <p className="text-sm text-gray-300">For entertainment only - All in good fun! 😂</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full bg-black/30 border border-pink-500/30">
            <TabsTrigger 
              value="roast" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 text-white"
            >
              <Flame className="w-4 h-4 mr-2" />
              Roast Me
            </TabsTrigger>
            <TabsTrigger 
              value="friend"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Roast Friend
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 text-white"
            >
              <Star className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 text-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roast" className="mt-8">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <UploadSection />
              <RoastGenerator />
            </Card>
          </TabsContent>

          <TabsContent value="friend" className="mt-8">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <div className="text-center py-8">
                <Users className="w-16 h-16 mx-auto text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Roast a Friend! 😈</h3>
                <p className="text-gray-300 mb-4">Upload their pic and watch the AI go savage!</p>
                <UploadSection friendMode={true} />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-8">
            <RoastHistory />
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-8">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <div className="text-center py-8">
                <Star className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
                <p className="text-gray-300">Leaderboards, challenges, and more epic features!</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Index;
