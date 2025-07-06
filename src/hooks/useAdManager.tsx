
import { useState, useEffect } from 'react';

interface AdConfig {
  interstitialFrequency: number; // Show after every X roasts
  bannerFrequency: number; // Show banner every X seconds
  nativeAdFrequency: number; // Show native ad every X actions
}

export const useAdManager = () => {
  const [roastCount, setRoastCount] = useState(0);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [adConfig] = useState<AdConfig>({
    interstitialFrequency: 3, // Show after every 3 roasts
    bannerFrequency: 30, // Show banner every 30 seconds
    nativeAdFrequency: 5 // Show native ad every 5 actions
  });

  // Check if interstitial should be shown
  const checkInterstitialAd = () => {
    const newCount = roastCount + 1;
    setRoastCount(newCount);
    
    if (newCount % adConfig.interstitialFrequency === 0) {
      setShowInterstitial(true);
    }
  };

  // Close interstitial ad
  const closeInterstitial = () => {
    setShowInterstitial(false);
  };

  // Track ad clicks for analytics
  const trackAdClick = (adType: 'banner' | 'interstitial' | 'native', adId?: string) => {
    console.log(`Ad clicked: ${adType}`, adId);
    // Here you would send to analytics service
  };

  return {
    showInterstitial,
    checkInterstitialAd,
    closeInterstitial,
    trackAdClick,
    roastCount
  };
};
