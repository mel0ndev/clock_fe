'use client';
import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  mainnet,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
  ],
  [publicProvider()]
);

const projectId = '21d43aa076a8d5a839b7102fed57c534';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'ClockClock Token',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const [client] = React.useState(new QueryClient()); 
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
	  <QueryClientProvider client={client}>
        <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={darkTheme()}>
          {mounted && children}
        </RainbowKitProvider>
	  </QueryClientProvider>
    </WagmiConfig>
  );
}
