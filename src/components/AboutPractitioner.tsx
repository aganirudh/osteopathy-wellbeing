import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Star } from "lucide-react";
import hemenshiPortrait from "@/assets/hemanshi-portrait.png";

const AboutPractitioner = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-wellness-100 rounded-full opacity-30 animate-float-up" />
      <div className="absolute bottom-32 left-16 w-28 h-28 bg-primary-light rounded-full opacity-40 animate-fade-in" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative float-up">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-6 bg-gradient-hero rounded-3xl opacity-10" />
              <div className="absolute -inset-3 bg-gradient-card rounded-2xl shadow-card" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <img 
                  src={hemenshiPortrait} 
                  alt="Hemanshi Mundhra, Osteopath at Sri Sri Wellbeing"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Floating Credential Card */}
              <Card className="absolute -bottom-6 -right-6 bg-card shadow-card border-border/50 max-w-xs">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        Integrated MSc in Osteopathy
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sri Sri University
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-light rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Meet Your Practitioner</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="gradient-text">Hemanshi Mundhra</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">
                  Integrated Master of Science in Osteopathy
                </span>{" "}
                from Sri Sri University. Dedicated to providing personalized, hands-on care 
                that addresses the root cause of your discomfort.
              </p>

              <blockquote className="relative pl-6 border-l-4 border-primary bg-gradient-card rounded-r-lg p-6 shadow-soft">
                <p className="text-xl italic text-foreground font-medium mb-3">
                  "Your Body Heals Best When Aligned."
                </p>
              </blockquote>
            </div>

            {/* Credentials & Approach */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Personalized Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Holistic Approach</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Trusted Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Proven Results</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPractitioner;
