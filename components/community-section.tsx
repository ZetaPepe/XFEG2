import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Users, Trophy } from "lucide-react"

export function CommunitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Join the <span className="text-primary">XFEG</span> Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Be part of the movement that's bringing disruption to millions. Create, share, and celebrate the best XFEG
            memes with fellow ape enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create & Share</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Upload your own XFEG memes and share them with the world. Easy tools, instant sharing.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Upload Meme</Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Follow your favorite meme creators and discover new content from the XFEG community.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compete</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Participate in weekly meme contests and win exclusive XFEG merchandise and recognition.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Contests
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Join thousands of XFEG fans and start creating memes that will make the internet disrupt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Create Your First Meme
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Browse Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
