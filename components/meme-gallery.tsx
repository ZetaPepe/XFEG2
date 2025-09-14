import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Download } from "lucide-react"

export function MemeGallery() {
  const memes = [
    {
      id: 1,
      title: "XFEG QR Code Ape - Ready for Digital Revolution",
      likes: 1234,
      image: "/xfeg-ape-qr.png",
    },
    {
      id: 2,
      title: "OKX Visor Ape - Future Vision Mode",
      likes: 987,
      image: "/xfeg-ape-okx-visor.jpeg",
    },
    {
      id: 3,
      title: "Synthwave XFEG - Retro Crypto Vibes",
      likes: 2156,
      image: "/xfeg-ape-synthwave.png",
    },
    {
      id: 4,
      title: "Business Ape - XFEG Professional Mode",
      likes: 1876,
      image: "/xfeg-ape-business.jpeg",
    },
    {
      id: 5,
      title: "Moon Mission - XFEG Leading All Meme Coins",
      likes: 3421,
      image: "/xfeg-ape-moon-memes.jpeg",
    },
    {
      id: 6,
      title: "Cyberpunk OKX Ape - Neon Revolution",
      likes: 1654,
      image: "/xfeg-ape-cyberpunk-okx.png",
    },
    {
      id: 7,
      title: "Neon OKXX Ape - Electric Energy",
      likes: 2847,
      image: "/xfeg-ape-neon-okxx.png",
    },
    {
      id: 8,
      title: "OKX Badge Ape - Official Stamp",
      likes: 1923,
      image: "/xfeg-ape-okx-badge.png",
    },
    {
      id: 9,
      title: "Minimal OKX Ape - Clean Design",
      likes: 2634,
      image: "/xfeg-ape-okx-minimal.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trending <span className="text-primary">XFEG</span> Memes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the most popular XFEG memes created by our amazing community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {memes.map((meme, index) => (
            <Card
              key={meme.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={meme.image || "/placeholder.svg"}
                    alt={meme.title}
                    className={`w-full h-64 object-cover group-hover:scale-105 transition-all duration-300 ${
                      index % 3 === 0 ? "animate-spin" : index % 3 === 1 ? "animate-pulse" : "animate-bounce"
                    }`}
                    style={{
                      animation:
                        index % 3 === 0
                          ? "spin 8s linear infinite"
                          : index % 3 === 1
                            ? "pulse 3s ease-in-out infinite"
                            : "bounce 2s ease-in-out infinite",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-3 text-balance">{meme.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{meme.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Memes
          </Button>
        </div>
      </div>
    </section>
  )
}
