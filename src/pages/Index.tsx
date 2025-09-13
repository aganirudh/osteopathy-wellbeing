import Hero from "@/components/Hero";
import WhatIsOsteopathy from "@/components/WhatIsOsteopathy";
import AboutPractitioner from "@/components/AboutPractitioner";
import BookingContact from "@/components/BookingContact";
import MediaTrust from "@/components/MediaTrust";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatIsOsteopathy />
      <AboutPractitioner />
      <BookingContact />
      <MediaTrust />
      <Footer />
      <FloatingChatButton />
    </main>
  );
};

export default Index;
