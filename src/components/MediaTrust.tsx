import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: "GwMJv5plr0A",
    title: "Gurudev speaks about Osteopathy in India",
    description: "Learn about the importance of osteopathy from our spiritual guide"
  },
  {
    id: "2Q-iBs7UeI0",
    title: "Osteopathy at SSU",
    description: "Discover how osteopathy benefits our community at SSU"
  }
];

const MediaTrust = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="gradient-text">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our patients and learn about osteopathy from Gurudev and our practitioners.
          </p>
        </div>

        {/* Videos Section */}
        <div className="grid lg:grid-cols-2 gap-8 fade-in">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-gradient-card border-border/50 shadow-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  {playingVideo === video.id ? (
                    <div className="aspect-video relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                      ></iframe>
                    </div>
                  ) : (
                    <div
                      className="aspect-video bg-gradient-to-br from-wellness-200 to-wellness-300 relative flex items-center justify-center cursor-pointer"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-xl" />
                      <div className="relative text-center space-y-6">
                        <div className="w-20 h-20 bg-cta rounded-full mx-auto flex items-center justify-center shadow-cta hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-cta-foreground ml-1" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-2">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground">{video.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaTrust;
