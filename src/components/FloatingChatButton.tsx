import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card rounded-lg shadow-card border border-border/50 p-4 space-y-3 min-w-[280px] animate-fade-in">
          <div className="text-center pb-3 border-b border-border/50">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">How can we help you today?</p>
          </div>
          
          <Button 
            variant="wellness" 
            className="w-full justify-start"
            onClick={() => window.open('tel:9829555897', '_self')}
          >
            <Phone className="mr-3 h-4 w-4" />
            Call Now - 9829555897
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => window.open('https://wa.me/919829555897?text=Hi, I would like to book an osteopathy session with Hemanshi Mundhra', '_blank')}
          >
            <MessageCircle className="mr-3 h-4 w-4" />
            WhatsApp
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X className="mr-3 h-4 w-4" />
            Close
          </Button>
        </div>
      )}

      {/* Main Chat Button */}
      <Button
        variant="cta"
        size="lg"
        className="w-16 h-16 rounded-full shadow-cta cta-pulse"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingChatButton;