import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Sparkles, Layers, TrendingUp, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            The <span className="text-primary">XFEG</span> Phenomenon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            What started as the first ape on X Layer blockchain became a global disruption force, capturing the essence
            of meme coin revolution across the decentralized internet. XFEG represents the bold fusion of ape culture
            and maximum disruption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">X Layer Origins</h3>
              <p className="text-muted-foreground text-pretty">
                XFEG first appeared on X Layer as the pioneering ape, disrupting the meme coin landscape. The bold ape
                design perfectly captured the revolutionary spirit of crypto disruption and decentralized rebellion.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Viral Lightning</h3>
              <p className="text-muted-foreground text-pretty">
                XFEG's disruptive ape energy struck a chord with millions, spreading faster than any meme coin before
                it. The bold black-and-white ape design made it instantly recognizable and endlessly shareable.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-muted-foreground text-pretty">
                From X Layer enthusiasts to meme creators worldwide, XFEG brought people together through shared
                disruption and the universal language of ape rebellion.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Endless Creativity</h3>
              <p className="text-muted-foreground text-pretty">
                The bold ape design of XFEG inspired countless variations, remixes, and creative interpretations across
                social media platforms and blockchain communities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Impact</h3>
              <p className="text-muted-foreground text-pretty">
                XFEG transcended its blockchain origins to become a symbol of meme coin disruption in the digital age,
                representing authentic rebellion in an era of traditional finance.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Recognition</h3>
              <p className="text-muted-foreground text-pretty">
                From crypto Twitter to mainstream social media, XFEG's disruptive ape became the go-to symbol for meme
                coin revolution, market disruption, and financial rebellion.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-center mb-6">The XFEG Story</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  In the bustling world of X Layer blockchain, where innovation meets creativity, the first ape emerged
                  that would change meme coin culture forever. XFEG, with its bold design and disruptive energy,
                  captured the exact moment of financial revolution that every crypto enthusiast knows well.
                </p>
                <p className="mb-4">
                  The genius of XFEG lies in its boldness. Created with powerful black strokes on a white background,
                  this disruptive ape manages to convey more rebellion than elaborate digital art pieces. The strong
                  features and determined expression create a symbol so universally powerful that it transcends language
                  barriers and cultural differences.
                </p>
                <p className="mb-4">
                  What started as the first ape on X Layer quickly spread across the entire blockchain ecosystem.
                  Traders used XFEG to express disruption at market movements, developers shared it when breaking new
                  ground, and communities adopted it as their official mascot of meme coin revolution.
                </p>
                <p>
                  Today, XFEG represents more than just a meme—it's a symbol of the disruptive forces that make the meme
                  coin world revolutionary. In an age of traditional finance and centralized systems, XFEG reminds us
                  that bold disruption and financial rebellion are still the most powerful forces on the blockchain.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
