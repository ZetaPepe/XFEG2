"use client"

import { Button } from "@/components/ui/button"
import { Wallet, ChevronDown } from "lucide-react"
import { useWallet } from "@/contexts/wallet-context"
import { useState } from "react"

export function WalletConnect() {
  const { isConnected, address, isConnecting, error, walletType, connectWallet, disconnectWallet } = useWallet()
  const [showWalletOptions, setShowWalletOptions] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const getWalletName = () => {
    if (walletType === "okx") return "OKX Wallet"
    if (walletType === "metamask") return "MetaMask"
    return "Wallet"
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-foreground">{formatAddress(address)}</span>
          <span className="text-xs text-foreground/70 font-medium">({getWalletName()})</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={disconnectWallet}
          className="text-muted-foreground hover:text-foreground"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end gap-2 relative">
      {!showWalletOptions ? (
        <Button
          onClick={() => setShowWalletOptions(true)}
          disabled={isConnecting}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Wallet className="mr-2 h-4 w-4" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      ) : (
        <div className="flex flex-col gap-2 bg-background border border-border rounded-lg p-2 shadow-lg">
          <Button
            onClick={() => {
              connectWallet("okx")
              setShowWalletOptions(false)
            }}
            disabled={isConnecting}
            variant="ghost"
            className="justify-start"
          >
            <div className="w-5 h-5 bg-black rounded mr-2 flex items-center justify-center">
              <span className="text-white text-xs font-bold">OKX</span>
            </div>
            OKX Wallet
          </Button>
          <Button
            onClick={() => {
              connectWallet("metamask")
              setShowWalletOptions(false)
            }}
            disabled={isConnecting}
            variant="ghost"
            className="justify-start"
          >
            <div className="w-5 h-5 bg-orange-500 rounded mr-2"></div>
            MetaMask
          </Button>
          <Button
            onClick={() => setShowWalletOptions(false)}
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
          >
            Cancel
          </Button>
        </div>
      )}
      {error && <p className="text-sm text-destructive max-w-48 text-right">{error}</p>}
    </div>
  )
}
