
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Target, Crown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const features = [
  {
    icon: Star,
    title: "Build Skills",
    description: "Master in-demand technologies",
    color: "text-yellow-400",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn industry-recognized certifications",
    color: "text-purple-400",
  },
  {
    icon: Target,
    title: "Land Jobs",
    description: "Connect with top employers",
    color: "text-blue-400",
  },
  {
    icon: Crown,
    title: "Grow Career",
    description: "Advance your professional journey",
    color: "text-green-400",
  },
];

const InteractiveFeature = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    toast({
      title: features[index].title,
      description: "Explore our courses to " + features[index].description.toLowerCase(),
    });
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeIndex === index;
          
          return (
            <Card
              key={index}
              className={`transform transition-all duration-300 cursor-pointer hover:scale-105 ${
                isActive ? 'border-purple-500 shadow-lg' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <CardContent className="p-6 text-center">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  isActive ? 'animate-bounce' : ''
                }`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveFeature;
