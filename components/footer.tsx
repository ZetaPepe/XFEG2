import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">XFEG</span>
            <Heart className="h-5 w-5 text-primary fill-current" />
          </div>
          <p className="text-muted-foreground mb-4">The first ape that disrupted meme coins on X Layer</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contest
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2024 XFEG. Made with ❤️ for the meme community.</p>
            <p className="mt-2">Originally from X Layer • Now everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
