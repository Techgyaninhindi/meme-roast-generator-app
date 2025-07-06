
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Settings, 
  BarChart3, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  DollarSign,
  Target,
  Activity
} from "lucide-react";

const AdminPanel = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: "Gaming Headphones Ad",
      type: "banner",
      status: "active",
      clicks: 1234,
      impressions: 45678,
      revenue: 234.56
    },
    {
      id: 2,
      title: "Food Delivery App",
      type: "interstitial",
      status: "active",
      clicks: 856,
      impressions: 23456,
      revenue: 445.23
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      phone: "+91 9876543210",
      roasts: 45,
      premium: true,
      joinedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "+91 8765432109",
      roasts: 23,
      premium: false,
      joinedDate: "2024-02-10"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Admin Panel 🛠️
          </h1>
          <p className="text-gray-300 mt-2">Manage ads, users, and analytics</p>
        </div>

        <Tabs defaultValue="ads" className="w-full">
          <TabsList className="grid grid-cols-4 w-full bg-black/30 border border-pink-500/30">
            <TabsTrigger value="ads" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Target className="w-4 h-4 mr-2" />
              Ads Manager
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ads" className="mt-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-orange-400">Ad Campaigns</h2>
                <Button className="bg-gradient-to-r from-green-500 to-teal-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Ad
                </Button>
              </div>

              <div className="grid gap-4">
                {ads.map((ad) => (
                  <Card key={ad.id} className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">{ad.title}</h3>
                          <Badge className={ad.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                            {ad.status}
                          </Badge>
                          <Badge variant="outline" className="border-orange-500/30 text-orange-300">
                            {ad.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-sm">
                          <div>
                            <span className="text-gray-400">Clicks:</span>
                            <span className="ml-2 text-white font-semibold">{ad.clicks.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Impressions:</span>
                            <span className="ml-2 text-white font-semibold">{ad.impressions.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Revenue:</span>
                            <span className="ml-2 text-green-400 font-semibold">₹{ad.revenue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-300">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-yellow-500/30 text-yellow-300">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-500/30 text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-orange-400">User Management</h2>
              <div className="grid gap-4">
                {users.map((user) => (
                  <Card key={user.id} className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                          {user.premium && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Phone:</span>
                            <span className="ml-2 text-white">{user.phone}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Roasts:</span>
                            <span className="ml-2 text-pink-400 font-semibold">{user.roasts}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Joined:</span>
                            <span className="ml-2 text-white">{user.joinedDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-300">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-500/30 text-red-300">
                          Ban User
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500/30 p-4">
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-blue-400" />
                  <div className="ml-4">
                    <p className="text-sm text-blue-300">Total Users</p>
                    <p className="text-2xl font-bold text-white">12,456</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-500/30 p-4">
                <div className="flex items-center">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <div className="ml-4">
                    <p className="text-sm text-green-300">Ad Revenue</p>
                    <p className="text-2xl font-bold text-white">₹45,678</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-500/30 p-4">
                <div className="flex items-center">
                  <Activity className="w-8 h-8 text-purple-400" />
                  <div className="ml-4">
                    <p className="text-sm text-purple-300">Daily Active</p>
                    <p className="text-2xl font-bold text-white">3,421</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 border border-orange-500/30 p-4">
                <div className="flex items-center">
                  <Target className="w-8 h-8 text-orange-400" />
                  <div className="ml-4">
                    <p className="text-sm text-orange-300">Ad Clicks</p>
                    <p className="text-2xl font-bold text-white">8,934</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">App Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-pink-300 font-semibold">Ad Frequency</label>
                  <Input 
                    type="number" 
                    placeholder="5" 
                    className="mt-2 bg-black/50 border-pink-500/30 text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">Show interstitial ad after every X roasts</p>
                </div>
                <div>
                  <label className="text-pink-300 font-semibold">Premium Price</label>
                  <Input 
                    type="number" 
                    placeholder="99" 
                    className="mt-2 bg-black/50 border-pink-500/30 text-white"
                  />
                  <p className="text-xs text-gray-400 mt-1">Annual premium subscription price in ₹</p>
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-teal-500">
                  Save Settings
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
