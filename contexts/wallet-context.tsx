"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

declare global {
  interface Window {
    ethereum?: any
    okxwallet?: any
  }
}

type WalletType = "metamask" | "okx" | null

interface WalletContextType {
  isConnected: boolean
  address: string
  isConnecting: boolean
  error: string
  walletType: WalletType
  connectWallet: (type: WalletType) => Promise<void>
  disconnectWallet: () => void
  checkConnection: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

interface WalletProviderProps {
  children: ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string>("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string>("")
  const [walletType, setWalletType] = useState<WalletType>(null)

  const X_LAYER_MAINNET = {
    chainId: "0xC4", // 196 in hex
    chainName: "X Layer Mainnet",
    nativeCurrency: {
      name: "OKB",
      symbol: "OKB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.xlayer.tech"],
    blockExplorerUrls: ["https://www.oklink.com/xlayer"],
  }

  const getWalletProvider = (type: WalletType) => {
    if (type === "okx") {
      return window.okxwallet
    }
    return window.ethereum
  }

  useEffect(() => {
    checkConnection()

    const setupListeners = (provider: any, type: WalletType) => {
      if (provider) {
        provider.on("accountsChanged", (accounts: string[]) => {
          if (accounts.length === 0) {
            disconnectWallet()
          } else {
            setAddress(accounts[0])
            setIsConnected(true)
            setWalletType(type)
          }
        })

        provider.on("chainChanged", () => {
          window.location.reload()
        })
      }
    }

    setupListeners(window.ethereum, "metamask")
    setupListeners(window.okxwallet, "okx")

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners("accountsChanged")
        window.ethereum.removeAllListeners("chainChanged")
      }
      if (window.okxwallet) {
        window.okxwallet.removeAllListeners("accountsChanged")
        window.okxwallet.removeAllListeners("chainChanged")
      }
    }
  }, [])

  const checkConnection = async () => {
    const checkWallet = async (provider: any, type: WalletType) => {
      if (provider) {
        try {
          const accounts = await provider.request({ method: "eth_accounts" })
          if (accounts.length > 0) {
            setAddress(accounts[0])
            setIsConnected(true)
            setWalletType(type)
            return true
          }
        } catch (error) {
          console.error(`Error checking ${type} connection:`, error)
        }
      }
      return false
    }

    // Check OKX first, then MetaMask
    const okxConnected = await checkWallet(window.okxwallet, "okx")
    if (!okxConnected) {
      await checkWallet(window.ethereum, "metamask")
    }
  }

  const connectWallet = async (type: WalletType) => {
    const provider = getWalletProvider(type)
    const walletName = type === "okx" ? "OKX Wallet" : "MetaMask"

    if (!provider) {
      setError(`Please install ${walletName}`)
      return
    }

    setIsConnecting(true)
    setError("")

    try {
      // Request account access
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      })

      // Check if we're on the correct network
      const chainId = await provider.request({ method: "eth_chainId" })

      if (chainId !== X_LAYER_MAINNET.chainId) {
        try {
          // Try to switch to X Layer Mainnet
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: X_LAYER_MAINNET.chainId }],
          })
        } catch (switchError: any) {
          // If the chain hasn't been added, add it
          if (switchError.code === 4902) {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [X_LAYER_MAINNET],
            })
          } else {
            throw switchError
          }
        }
      }

      setAddress(accounts[0])
      setIsConnected(true)
      setWalletType(type)
    } catch (error: any) {
      setError(error.message || `Failed to connect ${walletName}`)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress("")
    setError("")
    setWalletType(null)
  }

  const value = {
    isConnected,
    address,
    isConnecting,
    error,
    walletType,
    connectWallet,
    disconnectWallet,
    checkConnection,
  }

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}
