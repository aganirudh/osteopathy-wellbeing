import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const BookingContact = () => {
  return (
    <section id="booking-section" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-wellness-200 rounded-full opacity-20 animate-fade-in" />
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-primary-light rounded-full opacity-30 animate-float-up" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards natural healing and wellbeing. 
            Contact us today to schedule your personalized osteopathy session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <Card className="bg-gradient-card border-border/50 shadow-card wellness-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-lg text-primary font-semibold">9609306820 / 9829555897</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Mansarovar, Jaipur</p>
                      <p className="text-sm text-muted-foreground">Rajasthan, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Working Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: By appointment</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">contact@srisriwellbeing.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={() => window.open("https://chat.invictron.ai/widget/booking/HPizuMrq8o0CGLb3NTGl", "_blank")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Appointment Now
              </Button>
              
              <Button 
                variant="wellness" 
                size="lg"
                className="w-full text-lg py-6"
                onClick={() => window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=Art+of+Living+Yoga+and+Meditation+Center+–+Mansarovar,+73/199,+Shipra+Path,+Near+Tagore+Hospital,+Mansarovar+Sector+7,+Jaipur,+Rajasthan+302020",
                  "_blank"
                )}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8 float-up">
            {/* Google Map Card with Gradient */}
            <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden rounded-xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4119167173317!2d75.76913071101654!3d26.8586509765821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5daf6798857%3A0xae2889faf22e8a84!2sArt%20of%20Living%20Yoga%20and%20Meditation%20Center%20%E2%80%93%20Mansarovar!5e0!3m2!1sen!2sin!4v1757769923861!5m2!1sen!2sin"
                width="100%"
                height="320"
                className="border-0 rounded-xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-wellness-100/30 to-wellness-200/30 rounded-xl pointer-events-none" />
            </Card>

            {/* Additional Information */}
            <Card className="bg-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">What to Expect</h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p>Comprehensive health assessment and consultation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p>Personalized treatment plan tailored to your needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p>Gentle, hands-on osteopathic techniques</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p>Home care advice and exercise recommendations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContact;
