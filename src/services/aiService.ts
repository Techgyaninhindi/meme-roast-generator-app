
/**
 * AI Roast Generation Service
 * Handles OpenAI API integration for generating unique roasts
 */

interface RoastRequest {
  style: string;
  userBio?: string;
  imageDescription?: string;
  previousRoasts?: string[];
}

interface RoastResponse {
  roast: string;
  confidence: number;
  category: string;
}

class AIRoastService {
  private apiKey: string = '';
  private baseUrl: string = 'https://api.openai.com/v1/chat/completions';
  
  // Style-specific prompts for unique results
  private stylePrompts = {
    classic: "Generate a classic witty roast in Hinglish. Be clever but not offensive.",
    brutal: "Create a savage but playful roast in Hinglish. Make it spicy but fun.",
    filmy: "Generate a Bollywood-style dramatic roast with movie references in Hinglish.",
    desi: "Create a pure desi style roast with Indian cultural references in Hinglish.",
    genz: "Generate a Gen-Z style roast with modern slang and social media references.",
    influencer: "Create an influencer-style roast about social media lifestyle in Hinglish.",
    cringe: "Generate a cringe-worthy but funny roast in Hinglish.",
    mild: "Create a friendly, light-hearted roast in Hinglish."
  };

  setApiKey(key: string) {
    this.apiKey = key;
  }

  /**
   * Generate unique roast based on style and previous roasts
   */
  async generateRoast(request: RoastRequest): Promise<RoastResponse> {
    if (!this.apiKey) {
      // Return mock data for demo purposes
      return this.getMockRoast(request.style);
    }

    try {
      const systemPrompt = this.buildSystemPrompt(request);
      const userPrompt = this.buildUserPrompt(request);

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          max_tokens: 150,
          temperature: 0.9, // High creativity
          presence_penalty: 0.6, // Avoid repetition
          frequency_penalty: 0.5
        })
      });

      const data = await response.json();
      
      return {
        roast: data.choices[0]?.message?.content || 'AI is taking a break! 😅',
        confidence: 0.9,
        category: request.style
      };
    } catch (error) {
      console.error('AI API Error:', error);
      return this.getMockRoast(request.style);
    }
  }

  private buildSystemPrompt(request: RoastRequest): string {
    const basePrompt = this.stylePrompts[request.style as keyof typeof this.stylePrompts] || this.stylePrompts.classic;
    
    return `${basePrompt} 
    
Rules:
- Keep it 2 lines maximum
- Use Hinglish (Hindi + English mix)
- Be creative and unique
- Add relevant emojis
- Make it shareable and viral
- Avoid offensive content about religion, caste, or serious topics
- Focus on lifestyle, appearance, or personality traits
${request.previousRoasts?.length ? `- Don't repeat these previous roasts: ${request.previousRoasts.join(', ')}` : ''}`;
  }

  private buildUserPrompt(request: RoastRequest): string {
    let prompt = "Generate a unique roast for this person: ";
    
    if (request.userBio) {
      prompt += `Bio: ${request.userBio}. `;
    }
    
    if (request.imageDescription) {
      prompt += `Image shows: ${request.imageDescription}. `;
    }
    
    return prompt;
  }

  /**
   * Mock roasts for demo/fallback
   */
  private getMockRoast(style: string): RoastResponse {
    const mockRoasts = {
      classic: [
        "Bro, gym toh gaya lagta hai, lekin photo sirf mirror se dosti karne aayi hai. 📸💪",
        "Beta, confidence toh dekho, filter se zyada editing tum karte ho! 😂✨"
      ],
      brutal: [
        "Savage level dekho, photo mein 10/10, reality mein 2G connection! 📶😈",
        "Bhai, ye confidence loan par liya hai kya? EMI kab bharoge? 💸🔥"
      ],
      filmy: [
        "Hero banne ka sapna dekha tha, lekin cameo bhi nahi mil raha! 🎬😅",
        "Dialogue delivery dekho, 'Main hero hun' se 'Side character' tak ka journey! 🎭"
      ],
      desi: [
        "Arey yaar, swag dikha rahe ho ya local train ka rush hour? 🚂😂",
        "Beta, ye style Maharashtra se hai ya Rajasthan se? Geography confuse ho gayi! 🗺️"
      ],
      genz: [
        "Bestie, ye main character energy kahaan se laaye ho, Flipkart se? 🛒💅",
        "No cap, but ye photo giving major 'hired from WhatsApp University' vibes! 📱📚"
      ],
      influencer: [
        "Content creator ban rahe ho, lekin content bhi toh banana padega! 📹😅",
        "Reels mein expert, reality mein amateur - Netflix wala plot twist! 🎥"
      ],
      cringe: [
        "Bro ye pose dekh ke mera phone ka front camera cry kar raha hai! 📱😭",
        "Confidence level: Sharma ji ka beta after getting 60% marks! 📊😬"
      ],
      mild: [
        "Looking good buddy, thoda editing kam kar dete toh aur natural lagta! 😊✨",
        "Nice try yaar, next time lighting pe thoda dhyan dena! 💡😄"
      ]
    };

    const roasts = mockRoasts[style as keyof typeof mockRoasts] || mockRoasts.classic;
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    
    return {
      roast: randomRoast,
      confidence: 0.8,
      category: style
    };
  }

  /**
   * Analyze image and return description for better roasts
   */
  async analyzeImage(imageFile: File): Promise<string> {
    // For demo purposes, return mock analysis
    // In production, you could use OpenAI Vision API or Google Vision API
    const mockDescriptions = [
      "Person smiling at camera, casual outfit, indoor setting",
      "Gym photo, flexing pose, workout clothes",
      "Selfie with sunglasses, outdoor location",
      "Professional photo, formal attire, office background",
      "Party photo, group of friends, nighttime setting"
    ];
    
    return mockDescriptions[Math.floor(Math.random() * mockDescriptions.length)];
  }
}

export const aiRoastService = new AIRoastService();
export type { RoastRequest, RoastResponse };
