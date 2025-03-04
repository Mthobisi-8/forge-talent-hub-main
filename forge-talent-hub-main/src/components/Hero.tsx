
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const video = videoRef.current;
    if (video && location.pathname === '/') {
      video.loop = true;
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, [location.pathname]);

  return (
    <div className="relative bg-background min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Empower Your Career with AI-Driven Learning
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Gain the skills and certifications you need to land your dream job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-purple-500 text-purple-400 hover:bg-purple-900/20"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with AI
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full"
              src="/freecompress-invideo-ai-1080 Unlock Your Career with Forge Talent! 2025-02-07.mp4"
              playsInline
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default Hero;
