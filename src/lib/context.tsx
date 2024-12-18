'use client'

import { wagmiAdapter, projectId } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

const queryClient = new QueryClient()

const metadata = {
  name: 'Civic Hive',
  description: 'Community Reporting Platform',
  url: 'https://civic-hive.com',
  icons: ['https://ibb.co/gMwdHfb'],
}

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: wagmiAdapter.networks,
  defaultNetwork: wagmiAdapter.networks[0],
  metadata,
  features: {
    analytics: true,
  }
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider