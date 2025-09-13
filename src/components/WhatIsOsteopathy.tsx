import { Heart, Activity, Moon, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Activity,
    title: "Relief from back pain & stiffness",
    description: "Gentle manual techniques to ease tension and restore mobility"
  },
  {
    icon: Heart,
    title: "Better posture & flexibility",
    description: "Improve alignment and movement patterns for lasting comfort"
  },
  {
    icon: Leaf,
    title: "Improved digestion, sleep & breathing",
    description: "Holistic approach supporting your body's natural functions"
  },
  {
    icon: Moon,
    title: "Deep relaxation & stress reduction",
    description: "Calming therapy that promotes mental and physical wellbeing"
  }
];

const WhatIsOsteopathy = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What is <span className="gradient-text">Osteopathy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A holistic, drug-free approach to healthcare that focuses on treating the whole person, 
            not just symptoms. Through gentle manual techniques, osteopathy helps restore balance 
            and promote your body's natural healing abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="wellness-hover bg-gradient-card border-border/50 float-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-light rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative w-16 h-16 bg-primary-light rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center fade-in">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft border border-border/50">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Safe, natural, and effective for all ages
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsOsteopathy;