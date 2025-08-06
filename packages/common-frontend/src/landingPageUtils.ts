import {
    PenTool,
    Users,
    Download,
    Zap,
    Palette,
    Share2
  } from 'lucide-react';
  

type Feature = {
    icon: any;
    title: string;
    description: string;
};

export const features: Feature[] = [
    {
      icon: PenTool,
      title: "Intuitive Drawing",
      description: "Create beautiful diagrams and sketches with our intuitive drawing tools. Perfect for brainstorming and visual thinking."
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together in real-time with your team. See changes instantly and collaborate seamlessly from anywhere."
    },
    {
      icon: Download,
      title: "Export Anywhere",
      description: "Export your creations in multiple formats - PNG, SVG, PDF, and more. Share your ideas with the world."
    },
    {
      icon: Palette,
      title: "Rich Styling",
      description: "Customize colors, fonts, and styles to match your brand. Make your diagrams truly yours."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience smooth performance with our optimized rendering engine. No lag, just pure creativity."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your work with a simple link. Control permissions and collaborate with confidence."
    }
];