import { Button } from "@/components/ui/button";
import { Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full" />
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-white/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Sri Sri Wellbeing</h3>
              <p className="text-primary-light text-lg mb-4">Osteopathy with Hemanshi Mundhra</p>
              <p className="text-white/90 leading-relaxed max-w-md">
                Natural healing through gentle, hands-on osteopathic treatment. 
                Restoring balance and promoting your body's innate ability to heal.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cta" />
                <span className="text-white/90">9609306820 / 9829555897</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cta" />
                <span className="text-white/90">Mansarovar, Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Connect With Us</h4>
            
            <Button 
              variant="cta" 
              size="lg"
              className="w-full"
              onClick={scrollToBooking} // Scroll to booking section
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Button>

            <div className="flex gap-4 mt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
