import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-osteopathy.jpg";
import sriSriLogo from "@/assets/sri-sri-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Calming osteopathy treatment environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-wellness-100 rounded-full opacity-20 animate-float-up" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary-light rounded-full opacity-30 animate-fade-in" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="gradient-text">Osteopathy</span>
              <br />
              <span className="text-foreground">1-on-1 Sessions</span>
              <br />
              <span className="text-muted-foreground text-3xl lg:text-4xl font-medium">
                with Hemanshi Mundhra
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              A hands-on therapy to relieve pain, improve posture, and support natural healing — 
              <span className="text-primary font-medium"> without medication or surgery.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 float-up">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4119167173317!2d75.76913071101654!3d26.8586509765821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5daf6798857%3A0xae2889faf22e8a84!2sArt%20of%20Living%20Yoga%20and%20Meditation%20Center%20%E2%80%93%20Mansarovar!5e0!3m2!1sen!2sin!4v1757769923861!5m2!1sen!2sin",
                "_blank"
              )}
            >
              <MapPin className="mr-2 h-5 w-5" />
              View Centre Location
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground fade-in">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Mansarovar, Jaipur</span>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative lg:pl-12 flex justify-center items-center float-up">
          <div className="relative transition-transform duration-300 hover:scale-105 cursor-pointer"
               onClick={() => window.open("https://www.srisriwellbeing.com/", "_blank")}
          >
            <div className="absolute -inset-4 bg-gradient-card rounded-3xl shadow-card" />
            <div className="relative bg-card rounded-2xl p-8 shadow-soft border border-border/50 flex items-center justify-center">
              <img 
                src={sriSriLogo} 
                alt="Sri Sri Wellbeing Logo"
                className="max-w-[260px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
