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
  title: "XFEG", // Updated title for XFEG ape branding
  description:
    "The official home of XFEG, the first ape on X Layer chain born to disrupt meme coins. Share, create, and explore the best ape memes!", // Updated description for XFEG ape theme
  generator: "XFEG",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
