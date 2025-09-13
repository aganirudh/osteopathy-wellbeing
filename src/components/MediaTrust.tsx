import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Quote, Star, Users } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Jaipur",
    rating: 5,
    text: "Hemanshi's gentle approach completely relieved my chronic back pain. I feel more balanced and energetic than I have in years.",
    condition: "Chronic Back Pain"
  },
  {
    name: "Rajesh Kumar", 
    location: "Jaipur",
    rating: 5,
    text: "The holistic treatment helped not just my posture issues but also improved my sleep and overall wellbeing.",
    condition: "Posture Issues"
  },
  {
    name: "Anita Gupta",
    location: "Jaipur", 
    rating: 5,
    text: "Professional, caring, and effective. Hemanshi truly understands the body and how to help it heal naturally.",
    condition: "Stress & Tension"
  }
];

const MediaTrust = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 right-20 w-36 h-36 bg-wellness-100 rounded-full opacity-25 animate-float-up" />
      <div className="absolute bottom-40 left-12 w-28 h-28 bg-primary-light rounded-full opacity-35 animate-fade-in" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="gradient-text">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our patients and learn about osteopathy from Gurudev himself.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 fade-in">
          <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="relative">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-wellness-200 to-wellness-300 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                  <div className="relative text-center space-y-6">
                    <div className="w-20 h-20 bg-cta rounded-full mx-auto flex items-center justify-center shadow-cta hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="h-8 w-8 text-cta-foreground ml-1" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Gurudev speaks about Osteopathy in India
                      </h3>
                      <p className="text-muted-foreground">
                        Learn about the importance of osteopathy from our spiritual guide
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="p-6 bg-card border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-muted-foreground">Live Recording</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Watch on YouTube
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default MediaTrust;