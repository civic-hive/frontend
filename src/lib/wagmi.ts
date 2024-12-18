"use client"
import { http, createConfig } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';

// Define Hedera testnet chain
const hederaTestnet = {
  id: 296,
  name: 'Hedera Testnet',
  network: 'hedera-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'HBAR',
    symbol: 'HBAR',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.hashio.io/api'],
    },
    public: {
      http: ['https://testnet.hashio.io/api'],
    },
  },
  blockExplorers: {
    default: {
      name: 'HashScan',
      url: 'https://hashscan.io/testnet',
    },
  },
  testnet: true,
};

// You'll need to get a project ID from https://cloud.walletconnect.com
const projectId = '716fb73de093d46ed4865c0e79184e25'

export const config = createConfig({
  chains: [hederaTestnet],
  connectors: [
    walletConnect({
      projectId: projectId,
      metadata: {
        name: 'Your Hedera App',
        description: 'Hedera Testnet Application',
        url: 'https://yourapp.com',
        icons: ['https://yourapp.com/icon.png']
      }
    })
  ],
  transports: {
    [hederaTestnet.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}