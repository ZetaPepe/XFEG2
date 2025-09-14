import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { MeteorShower } from "@/components/meteor-shower"
import { WalletProvider } from "@/contexts/wallet-context"

export const metadata: Metadata = {
  title: "XFEG - The First Ape on X Layer", // Updated title for XFEG ape branding
  description:
    "The official home of XFEG, the first ape on X Layer chain born to disrupt meme coins. Share, create, and explore the best ape memes!", // Updated description for XFEG ape theme
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <WalletProvider>
          <MeteorShower />
          <Suspense fallback={null}>{children}</Suspense>
        </WalletProvider>
        <Analytics />
      </body>
    </html>
  )
}
