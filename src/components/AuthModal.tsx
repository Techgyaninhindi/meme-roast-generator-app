
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Flame } from "lucide-react";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    // Handle OTP verification
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border border-pink-500/30 p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-white">Join the Roast!</h2>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone" className="text-pink-300 font-semibold">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 bg-black/50 border-pink-500/30 text-white placeholder-gray-400"
              />
            </div>

            {showOtp && (
              <div>
                <Label htmlFor="otp" className="text-pink-300 font-semibold">
                  OTP Code
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-2 bg-black/50 border-pink-500/30 text-white placeholder-gray-400"
                />
              </div>
            )}

            <Button
              onClick={showOtp ? handleVerifyOtp : handleSendOtp}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3"
            >
              <User className="w-4 h-4 mr-2" />
              {showOtp ? 'Verify & Login' : 'Send OTP'}
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400">
              By logging in, you agree to get roasted! 😂
            </p>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              Skip for now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuthModal;
