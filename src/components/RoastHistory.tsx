
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Share, Download, Flame } from "lucide-react";

const RoastHistory: React.FC = () => {
  const [savedRoasts] = useState([
    {
      id: 1,
      text: "Bro, gym toh gaya lagta hai, lekin photo sirf mirror se dosti karne aayi hai. 📸💪",
      style: "Classic",
      date: "2 hours ago",
      likes: 23,
      isBookmarked: true
    },
    {
      id: 2,
      text: "Beta, ye filter itna heavy hai ki mera phone hang ho gaya seeing your pic! 😂📱",
      style: "Gen-Z",
      date: "1 day ago",
      likes: 45,
      isBookmarked: false
    },
    {
      id: 3,
      text: "Arey yaar, crypto bro ban ne se pehle confidence toh invest kar le! 💰😎",
      style: "Desi",
      date: "3 days ago",
      likes: 67,
      isBookmarked: true
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Your Roast Collection 🔥
        </h2>
        <p className="text-gray-300">All your savage moments in one place!</p>
      </div>

      {savedRoasts.length === 0 ? (
        <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-8 text-center">
          <Flame className="w-16 h-16 mx-auto text-orange-400 mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2 text-gray-400">No roasts yet!</h3>
          <p className="text-gray-500">Generate your first roast to see it here</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {savedRoasts.map((roast) => (
            <Card key={roast.id} className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                      {roast.style}
                    </Badge>
                    <span className="text-sm text-gray-400">{roast.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={roast.isBookmarked ? "text-yellow-400" : "text-gray-400"}
                  >
                    <Star className={`w-4 h-4 ${roast.isBookmarked ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Roast Text */}
                <div className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
                  <p className="text-white font-semibold text-lg leading-relaxed">
                    "{roast.text}"
                  </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-pink-400">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm font-semibold">{roast.likes} burns</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                    >
                      <Share className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-500/30 text-green-300 hover:bg-green-500/10"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Stats Card */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-pink-500/30 p-6">
        <h3 className="text-xl font-bold mb-4 text-center text-pink-400">Your Roast Stats 📊</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-400">{savedRoasts.length}</div>
            <div className="text-sm text-gray-300">Total Roasts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-400">{savedRoasts.filter(r => r.isBookmarked).length}</div>
            <div className="text-sm text-gray-300">Bookmarked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">{savedRoasts.reduce((sum, r) => sum + r.likes, 0)}</div>
            <div className="text-sm text-gray-300">Total Burns</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RoastHistory;
