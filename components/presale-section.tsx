"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { WalletConnect } from "@/components/wallet-connect"
import { useWallet } from "@/contexts/wallet-context"
import { Coins, Zap, Shield, TrendingUp } from "lucide-react"

export function PresaleSection() {
  const { isConnected, address, walletType } = useWallet()
  const [okbAmount, setOkbAmount] = useState<string>("0.1")
  const [isMinting, setIsMinting] = useState(false)
  const [mintSuccess, setMintSuccess] = useState(false)
  const presaleBalance = 200 // Fixed at 200 OKB - fully raised
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [presaleStatus, setPresaleStatus] = useState<"before" | "active" | "ended">("before")

  const PRESALE_ADDRESS = "0x613712b2f85a48e10eea3f26ac6fdd5fc0302a83"
  const PRESALE_GOAL = 200 // 200 OKB goal

  const PRESALE_START = new Date("2025-09-14T20:00:00+08:00") // Beijing Time
  const PRESALE_END = new Date("2025-09-14T22:00:00+08:00") // Beijing Time

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      let targetTime: Date
      let status: "before" | "active" | "ended"

      if (now < PRESALE_START) {
        targetTime = PRESALE_START
        status = "before"
      } else if (now < PRESALE_END) {
        targetTime = PRESALE_END
        status = "active"
      } else {
        status = "ended"
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setPresaleStatus(status)
        return
      }

      const difference = targetTime.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }

      setPresaleStatus(status)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleAmountChange = (value: string) => {
    if (value === "") {
      setOkbAmount("")
      return
    }

    if (value.match(/^\d*\.?\d*$/)) {
      setOkbAmount(value)
    }
  }

  const handleAmountBlur = () => {
    const numValue = Number.parseFloat(okbAmount)
    if (isNaN(numValue) || okbAmount === "") {
      setOkbAmount("0.1")
    } else if (numValue < 0.1) {
      setOkbAmount("0.1")
    } else if (numValue > 1) {
      setOkbAmount("1")
    } else {
      setOkbAmount(numValue.toString())
    }
  }

  const handleMint = async () => {
    if (presaleStatus !== "active") {
      alert("Presale is not currently active!")
      return
    }

    console.log("[v0] Mint button clicked")
    console.log("[v0] Address:", address)
    console.log("[v0] Wallet type:", walletType)

    const provider = walletType === "okx" ? window.okxwallet : window.ethereum
    console.log("[v0] Provider available:", !!provider)

    if (!address || !provider) {
      console.log("[v0] Missing address or provider")
      alert("Please ensure your wallet is properly connected")
      return
    }

    setIsMinting(true)
    setMintSuccess(false)

    try {
      console.log("[v0] Starting mint process with amount:", okbAmount)
      const amountInWei = (Number.parseFloat(okbAmount) * 1e18).toString(16)
      console.log("[v0] Amount in wei (hex):", amountInWei)

      const transactionParameters = {
        to: PRESALE_ADDRESS,
        from: address,
        value: `0x${amountInWei}`,
        gas: "0x5208",
      }

      console.log("[v0] Transaction parameters:", transactionParameters)

      const txHash = await provider.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      })

      console.log("[v0] Transaction sent:", txHash)
      setMintSuccess(true)
    } catch (error: any) {
      console.error("[v0] Mint failed:", error)
      alert(`Minting failed: ${error.message || "Unknown error"}`)
    } finally {
      setIsMinting(false)
    }
  }

  const PresaleProgress = () => {
    const progressPercentage = 100.0
    const remainingOKB = 0

    return (
      <Card className="border-primary/20 mb-6">
        <CardHeader>
          <CardTitle className="text-center">Presale Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Raised: {presaleBalance.toFixed(4)} OKB</span>
              <span>Goal: {PRESALE_GOAL} OKB</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="text-center text-sm text-muted-foreground">{progressPercentage.toFixed(1)}% Complete</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
              <div className="text-lg font-bold text-foreground">{presaleBalance.toFixed(4)}</div>
              <div className="text-xs text-foreground/70 font-medium">OKB Raised</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-lg font-bold">{remainingOKB.toFixed(4)}</div>
              <div className="text-xs text-muted-foreground">OKB Remaining</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const CountdownTimer = () => (
    <Card className="border-primary/20 mb-6">
      <CardHeader>
        <CardTitle className="text-center">
          {presaleStatus === "before" && "Presale Starts In"}
          {presaleStatus === "active" && "Presale Ends In"}
          {presaleStatus === "ended" && "Presale Ended"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {presaleStatus !== "ended" ? (
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3">
              <div className="text-2xl font-bold text-foreground">{timeLeft.days}</div>
              <div className="text-xs text-foreground/80 font-medium">Days</div>
            </div>
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3">
              <div className="text-2xl font-bold text-foreground">{timeLeft.hours}</div>
              <div className="text-xs text-foreground/80 font-medium">Hours</div>
            </div>
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3">
              <div className="text-2xl font-bold text-foreground">{timeLeft.minutes}</div>
              <div className="text-xs text-foreground/80 font-medium">Minutes</div>
            </div>
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-3">
              <div className="text-2xl font-bold text-foreground">{timeLeft.seconds}</div>
              <div className="text-xs text-foreground/80 font-medium">Seconds</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-2xl font-bold text-muted-foreground">Presale Has Ended</div>
            <div className="text-sm text-muted-foreground mt-2">Thank you for your interest!</div>
          </div>
        )}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <div>Start: Sep 14, 2025 20:00 Beijing Time</div>
          <div>End: Sep 14, 2025 22:00 Beijing Time</div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="presale-section" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            XFEG <span className="text-primary">Presale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join the XFEG revolution! Mint your XFEG tokens now during our exclusive presale phase.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
          <PresaleProgress />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Presale Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Min Amount:</span>
                    <span className="font-semibold">0.1 OKB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Max Amount:</span>
                    <span className="font-semibold">1.0 OKB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Network:</span>
                    <span className="font-semibold">X Layer Mainnet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Chain ID:</span>
                    <span className="font-semibold">196</span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-primary/20">
                  <Coins className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Instant</div>
                  <div className="text-xs text-muted-foreground">Delivery</div>
                </Card>
                <Card className="text-center p-4 border-primary/20">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Secure</div>
                  <div className="text-xs text-muted-foreground">Blockchain</div>
                </Card>
                <Card className="text-center p-4 border-primary/20">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Limited</div>
                  <div className="text-xs text-muted-foreground">Supply</div>
                </Card>
              </div>
            </div>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Mint XFEG Tokens</CardTitle>
                {!isConnected && (
                  <div className="flex justify-end">
                    <WalletConnect />
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {presaleStatus === "before" && (
                  <div className="p-4 bg-yellow-500/20 border border-yellow-500/40 rounded-lg">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium text-center">
                      ⏰ Presale hasn't started yet. Please wait for the countdown to finish!
                    </p>
                  </div>
                )}

                {presaleStatus === "ended" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-600 text-sm font-medium text-center">
                      🔒 Presale has ended. Minting is no longer available.
                    </p>
                  </div>
                )}

                {presaleStatus === "active" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 text-sm font-medium text-center">
                      🚀 Presale is now LIVE! Mint your XFEG tokens now!
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="okb-amount">OKB Amount</Label>
                  <div className="relative">
                    <Input
                      id="okb-amount"
                      type="text"
                      placeholder="0.1"
                      value={okbAmount}
                      onChange={(e) => handleAmountChange(e.target.value)}
                      onBlur={handleAmountBlur}
                      onFocus={(e) => e.target.select()}
                      className="pr-12"
                      disabled={!isConnected}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">OKB</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[0.1, 0.5, 1.0].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        size="sm"
                        onClick={() => setOkbAmount(amount.toString())}
                        disabled={!isConnected}
                        className="text-xs"
                      >
                        {amount} OKB
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>You will send:</span>
                    <span className="font-semibold">{okbAmount} OKB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>To address:</span>
                    <span className="font-mono text-xs">
                      {PRESALE_ADDRESS.slice(0, 10)}...{PRESALE_ADDRESS.slice(-8)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleMint}
                  disabled={
                    !isConnected ||
                    isMinting ||
                    presaleStatus !== "active" ||
                    Number.parseFloat(okbAmount) < 0.1 ||
                    Number.parseFloat(okbAmount) > 1
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {presaleStatus === "before" && "Presale Not Started"}
                  {presaleStatus === "ended" && "Presale Ended"}
                  {presaleStatus === "active" && (isMinting ? "Processing..." : "Mint XFEG Tokens")}
                </Button>

                {mintSuccess && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 text-sm font-medium">
                      🎉 Transaction sent successfully! Your XFEG tokens will be delivered shortly.
                    </p>
                  </div>
                )}

                {!isConnected && (
                  <p className="text-sm text-muted-foreground text-center">
                    Connect your wallet to participate in the presale
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
