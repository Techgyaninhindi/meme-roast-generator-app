
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Instagram, User } from "lucide-react";

interface UploadSectionProps {
  friendMode?: boolean;
}

const UploadSection: React.FC<UploadSectionProps> = ({ friendMode = false }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [profileLink, setProfileLink] = useState('');
  const [bio, setBio] = useState('');
  const [uploadMethod, setUploadMethod] = useState('photo');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-orange-400">
          {friendMode ? "Upload Your Friend's Pic 📸" : "Choose Your Poison! ☠️"}
        </h3>
        <p className="text-gray-300">
          {friendMode ? "Time to roast them good!" : "How do you want to get roasted today?"}
        </p>
      </div>

      {/* Upload Method Selector */}
      <div className="grid grid-cols-3 gap-4">
        <Button
          variant={uploadMethod === 'photo' ? 'default' : 'outline'}
          onClick={() => setUploadMethod('photo')}
          className={uploadMethod === 'photo' 
            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
            : "border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
          }
        >
          <Camera className="w-4 h-4 mr-2" />
          Photo
        </Button>
        <Button
          variant={uploadMethod === 'profile' ? 'default' : 'outline'}
          onClick={() => setUploadMethod('profile')}
          className={uploadMethod === 'profile' 
            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
            : "border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
          }
        >
          <Instagram className="w-4 h-4 mr-2" />
          Profile
        </Button>
        <Button
          variant={uploadMethod === 'bio' ? 'default' : 'outline'}
          onClick={() => setUploadMethod('bio')}
          className={uploadMethod === 'bio' 
            ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
            : "border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
          }
        >
          <User className="w-4 h-4 mr-2" />
          Bio
        </Button>
      </div>

      {/* Photo Upload */}
      {uploadMethod === 'photo' && (
        <Card className="bg-black/30 border border-pink-500/30 p-6">
          <div className="text-center">
            {uploadedImage ? (
              <div className="space-y-4">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded" 
                  className="max-w-xs mx-auto rounded-lg border-2 border-pink-500/50"
                />
                <Button 
                  onClick={triggerFileInput}
                  variant="outline"
                  className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10"
                >
                  Change Photo
                </Button>
              </div>
            ) : (
              <div 
                onClick={triggerFileInput}
                className="border-2 border-dashed border-pink-500/50 rounded-lg p-8 cursor-pointer hover:border-pink-400/70 transition-colors"
              >
                <Upload className="w-12 h-12 mx-auto text-pink-400 mb-4" />
                <p className="text-lg font-semibold text-pink-300 mb-2">Drop your selfie here! 📸</p>
                <p className="text-sm text-gray-400">Click to browse or drag & drop</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </Card>
      )}

      {/* Profile Link */}
      {uploadMethod === 'profile' && (
        <Card className="bg-black/30 border border-pink-500/30 p-6">
          <Label htmlFor="profile-link" className="text-pink-300 font-semibold">
            Instagram/Twitter Profile Link 🔗
          </Label>
          <Input
            id="profile-link"
            type="url"
            placeholder="https://instagram.com/your_username"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
            className="mt-2 bg-black/50 border-pink-500/30 text-white placeholder-gray-400"
          />
          <p className="text-xs text-gray-400 mt-2">We'll analyze your profile for maximum roast potential! 🔥</p>
        </Card>
      )}

      {/* Bio Input */}
      {uploadMethod === 'bio' && (
        <Card className="bg-black/30 border border-pink-500/30 p-6">
          <Label htmlFor="bio" className="text-pink-300 font-semibold">
            Tell us about yourself... 😏
          </Label>
          <Textarea
            id="bio"
            placeholder="Gym freak, crypto bro, meme lord, foodie, travel addict..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-2 bg-black/50 border-pink-500/30 text-white placeholder-gray-400 min-h-[100px]"
          />
          <p className="text-xs text-gray-400 mt-2">The more you tell us, the better we roast you! 🌶️</p>
        </Card>
      )}
    </div>
  );
};

export default UploadSection;
