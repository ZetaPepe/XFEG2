"use client"

import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react" // Changed from Download to Coins icon for minting
import Image from "next/image"
import { WalletConnect } from "@/components/wallet-connect"

export function HeroSection() {
  const scrollToPresale = () => {
    console.log("[v0] Mint button clicked - attempting to scroll")
    const presaleSection = document.getElementById("presale-section")
    console.log("[v0] Found presale section:", !!presaleSection)
    if (presaleSection) {
      console.log("[v0] Scrolling to presale section")
      presaleSection.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log("[v0] Presale section not found!")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-6 left-6 z-20 flex gap-3">
        <a
          href="https://x.com/xfeg_okx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 border-2 border-white"
          aria-label="Follow XFEG on X (Twitter)"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://t.me/XFEG_OKX"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 border-2 border-white"
          aria-label="Join XFEG Telegram"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </a>
      </div>

      <div className="absolute top-6 right-6 z-20">
        <WalletConnect />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-accent rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Main XFEG logo/image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <Image
                src="/xfeg-ape.jpg"
                alt="XFEG - The First Ape on X Layer"
                width={256}
                height={256}
                className="relative z-10 rounded-full border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Hero text */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 text-balance">
            <span className="text-primary">XFEG</span>
          </h1>

          <p className="text-lg md:text-xl text-primary mb-2 text-center break-all">
            CA: 0xaC21D9e8A92718987D10e60B3e97779A0542acCE
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 text-balance">The First Ape on X Layer Chain</p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Born on X Layer blockchain platform, XFEG is the first ape born to disrupt meme coins on the X Layer chain.
            This bold black-and-white ape art became the symbol of disruption across the decentralized web.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={scrollToPresale} // Added click handler to scroll to presale section
            >
              <Coins className="mr-2 h-5 w-5" /> {/* Changed icon from Download to Coins */}
              Mint {/* Changed text from "Get OKAT Memes" to "Mint" */}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Shares</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Memes Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Surprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
