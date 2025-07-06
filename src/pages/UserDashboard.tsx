
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Crown, 
  Flame, 
  Star, 
  Calendar,
  Settings,
  Share,
  Download,
  Trophy,
  Gift
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth();
  const [userStats] = useState({
    totalRoasts: 45,
    favoriteRoasts: 12,
    shareCount: 28,
    roastStreak: 7,
    level: 5,
    nextLevelProgress: 65,
    isPremium: false
  });

  const [recentRoasts] = useState([
    {
      id: 1,
      text: "Bro, gym toh gaya lagta hai, lekin photo sirf mirror se dosti karne aayi hai. 📸💪",
      style: "Classic",
      date: "2 hours ago",
      likes: 23
    },
    {
      id: 2,
      text: "Beta, ye filter itna heavy hai ki mera phone hang ho gaya seeing your pic! 😂📱",
      style: "Gen-Z",
      date: "1 day ago",
      likes: 45
    }
  ]);

  const [achievements] = useState([
    { name: "First Roast", icon: "🔥", unlocked: true },
    { name: "Roast Master", icon: "👑", unlocked: true },
    { name: "Viral King", icon: "📱", unlocked: false },
    { name: "Premium User", icon: "💎", unlocked: false }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Hey {user?.name || 'Roaster'}! 🔥
              </h1>
              <p className="text-gray-300 mt-2">Your roasting journey dashboard</p>
            </div>
            {!userStats.isPremium && (
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 w-full bg-black/30 border border-pink-500/30">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <User className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="roasts" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Flame className="w-4 h-4 mr-2" />
              My Roasts
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 border border-orange-500/30 p-4">
                <div className="flex items-center">
                  <Flame className="w-8 h-8 text-orange-400" />
                  <div className="ml-4">
                    <p className="text-sm text-orange-300">Total Roasts</p>
                    <p className="text-2xl font-bold text-white">{userStats.totalRoasts}</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-pink-900/50 to-pink-800/50 border border-pink-500/30 p-4">
                <div className="flex items-center">
                  <Star className="w-8 h-8 text-pink-400" />
                  <div className="ml-4">
                    <p className="text-sm text-pink-300">Favorites</p>
                    <p className="text-2xl font-bold text-white">{userStats.favoriteRoasts}</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500/30 p-4">
                <div className="flex items-center">
                  <Share className="w-8 h-8 text-blue-400" />
                  <div className="ml-4">
                    <p className="text-sm text-blue-300">Shares</p>
                    <p className="text-2xl font-bold text-white">{userStats.shareCount}</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-500/30 p-4">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 text-green-400" />
                  <div className="ml-4">
                    <p className="text-sm text-green-300">Streak</p>
                    <p className="text-2xl font-bold text-white">{userStats.roastStreak} days</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Level Progress */}
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-orange-400">Roaster Level {userStats.level}</h3>
                  <p className="text-gray-300">Keep roasting to level up!</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">{userStats.nextLevelProgress}%</p>
                  <p className="text-sm text-gray-400">to Level {userStats.level + 1}</p>
                </div>
              </div>
              <Progress value={userStats.nextLevelProgress} className="h-3" />
            </Card>

            {/* Recent Activity */}
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Recent Roasts</h3>
              <div className="space-y-4">
                {recentRoasts.map((roast) => (
                  <div key={roast.id} className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-gradient-to-r from-orange-500 to-pink-500">
                        {roast.style}
                      </Badge>
                      <span className="text-sm text-gray-400">{roast.date}</span>
                    </div>
                    <p className="text-white font-semibold mb-2">"{roast.text}"</p>
                    <div className="flex items-center gap-1 text-pink-400">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm">{roast.likes} burns</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Your Achievements 🏆</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-2 text-center ${
                      achievement.unlocked 
                        ? 'border-yellow-500 bg-yellow-500/20' 
                        : 'border-gray-600 bg-gray-900/50'
                    }`}
                  >
                    <div className={`text-4xl mb-2 ${!achievement.unlocked && 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className={`font-semibold ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {achievement.name}
                    </h4>
                    {achievement.unlocked && (
                      <Badge className="mt-2 bg-green-500">Unlocked</Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Premium Status</h4>
                  {userStats.isPremium ? (
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">Premium Active</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-gray-300">Upgrade to Premium for exclusive features!</p>
                      <Button className="bg-gradient-to-r from-yellow-500 to-orange-500">
                        <Gift className="w-4 h-4 mr-2" />
                        Upgrade Now - ₹99/year
                      </Button>
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-white">New roast challenges</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-white">Weekly leaderboard updates</span>
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
