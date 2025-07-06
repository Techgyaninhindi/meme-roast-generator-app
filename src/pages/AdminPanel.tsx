
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
  Activity,
  Shield,
  Database,
  Zap,
  TrendingUp,
  UserCheck,
  AlertTriangle
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
      revenue: 234.56,
      ctr: "2.7%",
      startDate: "2024-01-01",
      endDate: "2024-12-31"
    },
    {
      id: 2,
      title: "Food Delivery App",
      type: "interstitial",
      status: "active",
      clicks: 856,
      impressions: 23456,
      revenue: 445.23,
      ctr: "3.6%",
      startDate: "2024-01-15",
      endDate: "2024-12-31"
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      phone: "+91 9876543210",
      email: "rahul@email.com",
      roasts: 45,
      premium: true,
      joinedDate: "2024-01-15",
      lastActive: "2 hours ago",
      status: "active",
      totalSpent: 99
    },
    {
      id: 2,
      name: "Priya Sharma",
      phone: "+91 8765432109",
      email: "priya@email.com",
      roasts: 23,
      premium: false,
      joinedDate: "2024-02-10",
      lastActive: "1 day ago",
      status: "active",
      totalSpent: 0
    },
    {
      id: 3,
      name: "Arjun Singh",
      phone: "+91 7654321098",
      email: "arjun@email.com",
      roasts: 67,
      premium: true,
      joinedDate: "2024-01-05",
      lastActive: "30 mins ago",
      status: "active",
      totalSpent: 199
    }
  ]);

  const [systemStats] = useState({
    totalUsers: 12456,
    activeUsers: 3421,
    premiumUsers: 892,
    totalRoasts: 45678,
    totalRevenue: 89234,
    adRevenue: 34567,
    subscriptionRevenue: 54667,
    dailyActiveUsers: 2145,
    serverUptime: "99.9%",
    apiCalls: 123456
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard 🛠️
            </h1>
            <p className="text-gray-300 mt-2">Complete control center for AI Profile Roaster</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-green-500 to-teal-500">
              <Shield className="w-4 h-4 mr-2" />
              Security Logs
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
              <Database className="w-4 h-4 mr-2" />
              Backup DB
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500/30 p-4">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-blue-400" />
              <div className="ml-3">
                <p className="text-xs text-blue-300">Total Users</p>
                <p className="text-lg font-bold text-white">{systemStats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-500/30 p-4">
            <div className="flex items-center">
              <UserCheck className="w-6 h-6 text-green-400" />
              <div className="ml-3">
                <p className="text-xs text-green-300">Premium Users</p>
                <p className="text-lg font-bold text-white">{systemStats.premiumUsers.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-500/30 p-4">
            <div className="flex items-center">
              <Activity className="w-6 h-6 text-purple-400" />
              <div className="ml-3">
                <p className="text-xs text-purple-300">Daily Active</p>
                <p className="text-lg font-bold text-white">{systemStats.dailyActiveUsers.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 border border-orange-500/30 p-4">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-orange-400" />
              <div className="ml-3">
                <p className="text-xs text-orange-300">Total Roasts</p>
                <p className="text-lg font-bold text-white">{systemStats.totalRoasts.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 border border-yellow-500/30 p-4">
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 text-yellow-400" />
              <div className="ml-3">
                <p className="text-xs text-yellow-300">Total Revenue</p>
                <p className="text-lg font-bold text-white">₹{systemStats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/30 p-4">
            <div className="flex items-center">
              <TrendingUp className="w-6 h-6 text-red-400" />
              <div className="ml-3">
                <p className="text-xs text-red-300">Server Uptime</p>
                <p className="text-lg font-bold text-white">{systemStats.serverUptime}</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid grid-cols-6 w-full bg-black/30 border border-pink-500/30">
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="ads" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Target className="w-4 h-4 mr-2" />
              Ads Manager
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="revenue" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <DollarSign className="w-4 h-4 mr-2" />
              Revenue
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Shield className="w-4 h-4 mr-2" />
              System
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Subscription Revenue</span>
                    <span className="text-green-400 font-bold">₹{systemStats.subscriptionRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ad Revenue</span>
                    <span className="text-blue-400 font-bold">₹{systemStats.adRevenue.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Revenue</span>
                      <span className="text-yellow-400 font-bold">₹{systemStats.totalRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4">User Engagement</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Roasts per User</span>
                    <span className="text-pink-400 font-bold">{Math.round(systemStats.totalRoasts / systemStats.totalUsers)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Premium Conversion Rate</span>
                    <span className="text-green-400 font-bold">{((systemStats.premiumUsers / systemStats.totalUsers) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Daily Active Users</span>
                    <span className="text-blue-400 font-bold">{systemStats.dailyActiveUsers.toLocaleString()}</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ads" className="mt-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-orange-400">Ad Campaign Management</h2>
                <Button className="bg-gradient-to-r from-green-500 to-teal-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Campaign
                </Button>
              </div>

              <div className="grid gap-4">
                {ads.map((ad) => (
                  <Card key={ad.id} className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">{ad.title}</h3>
                          <Badge className={ad.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                            {ad.status}
                          </Badge>
                          <Badge variant="outline" className="border-orange-500/30 text-orange-300">
                            {ad.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Clicks:</span>
                            <span className="ml-2 text-white font-semibold">{ad.clicks.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Impressions:</span>
                            <span className="ml-2 text-white font-semibold">{ad.impressions.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">CTR:</span>
                            <span className="ml-2 text-blue-400 font-semibold">{ad.ctr}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Revenue:</span>
                            <span className="ml-2 text-green-400 font-semibold">₹{ad.revenue}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Period:</span>
                            <span className="ml-2 text-purple-400 font-semibold">{ad.startDate} to {ad.endDate}</span>
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
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-orange-400">User Management</h2>
                <div className="flex gap-3">
                  <Input placeholder="Search users..." className="bg-black/50 border-pink-500/30 text-white" />
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                    Export Data
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-4">
                {users.map((user) => (
                  <Card key={user.id} className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                          {user.premium && (
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                              Premium
                            </Badge>
                          )}
                          <Badge className={user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                            {user.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Phone:</span>
                            <span className="ml-2 text-white">{user.phone}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Email:</span>
                            <span className="ml-2 text-blue-400">{user.email}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Roasts:</span>
                            <span className="ml-2 text-pink-400 font-semibold">{user.roasts}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Joined:</span>
                            <span className="ml-2 text-white">{user.joinedDate}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Last Active:</span>
                            <span className="ml-2 text-green-400">{user.lastActive}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Spent:</span>
                            <span className="ml-2 text-yellow-400 font-semibold">₹{user.totalSpent}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-300">
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm" className="border-yellow-500/30 text-yellow-300">
                          Send Message
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-500/30 text-red-300">
                          <AlertTriangle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Revenue Analytics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="text-lg font-semibold text-green-300">Monthly Revenue</h4>
                    <p className="text-2xl font-bold text-white">₹{(systemStats.totalRevenue / 12).toFixed(0)}</p>
                    <p className="text-sm text-green-400">+15% from last month</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-lg font-semibold text-blue-300">ARPU (Avg Revenue Per User)</h4>
                    <p className="text-2xl font-bold text-white">₹{(systemStats.totalRevenue / systemStats.totalUsers).toFixed(0)}</p>
                    <p className="text-sm text-blue-400">All users included</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Revenue Sources</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-purple-900/20 rounded-lg">
                    <span className="text-purple-300">Premium Subscriptions</span>
                    <span className="text-white font-bold">61.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-900/20 rounded-lg">
                    <span className="text-blue-300">Advertisement Revenue</span>
                    <span className="text-white font-bold">38.7%</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">System Health</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Server Uptime</span>
                    <Badge className="bg-green-500">{systemStats.serverUptime}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">API Calls Today</span>
                    <span className="text-blue-400 font-bold">{systemStats.apiCalls.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Database Status</span>
                    <Badge className="bg-green-500">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Last Backup</span>
                    <span className="text-green-400">2 hours ago</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Database className="w-4 h-4 mr-2" />
                    Backup Database
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                    <Shield className="w-4 h-4 mr-2" />
                    Run Security Scan
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Clear Cache
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="bg-black/20 backdrop-blur-md border border-pink-500/30 p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Application Settings</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-pink-300 font-semibold">Interstitial Ad Frequency</label>
                    <Input 
                      type="number" 
                      placeholder="3" 
                      className="mt-2 bg-black/50 border-pink-500/30 text-white"
                    />
                    <p className="text-xs text-gray-400 mt-1">Show ad after every X roasts</p>
                  </div>
                  <div>
                    <label className="text-pink-300 font-semibold">Premium Price (Annual)</label>
                    <Input 
                      type="number" 
                      placeholder="99" 
                      className="mt-2 bg-black/50 border-pink-500/30 text-white"
                    />
                    <p className="text-xs text-gray-400 mt-1">Price in ₹</p>
                  </div>
                  <div>
                    <label className="text-pink-300 font-semibold">OpenAI API Key</label>
                    <Input 
                      type="password" 
                      placeholder="sk-..." 
                      className="mt-2 bg-black/50 border-pink-500/30 text-white"
                    />
                    <p className="text-xs text-gray-400 mt-1">For AI roast generation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-pink-300 font-semibold">App Maintenance Mode</label>
                    <div className="mt-2 flex items-center gap-3">
                      <Badge className="bg-green-500">Active</Badge>
                      <Button variant="outline" size="sm" className="border-yellow-500/30 text-yellow-300">
                        Toggle Maintenance
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-pink-300 font-semibold">User Registration</label>
                    <div className="mt-2 flex items-center gap-3">
                      <Badge className="bg-green-500">Enabled</Badge>
                      <Button variant="outline" size="sm" className="border-red-500/30 text-red-300">
                        Disable Registration
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-pink-300 font-semibold">Analytics Tracking</label>
                    <div className="mt-2 flex items-center gap-3">
                      <Badge className="bg-green-500">Enabled</Badge>
                      <Button variant="outline" size="sm" className="border-gray-500/30 text-gray-300">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="bg-gradient-to-r from-green-500 to-teal-500">
                  Save All Settings
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
