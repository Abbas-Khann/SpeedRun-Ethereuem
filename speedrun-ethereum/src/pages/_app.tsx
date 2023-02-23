import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [goerli],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'SpeedRun Ethereum',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const lato = Lato({
  subsets: ['latin'],
  weight : ["300", "400", "700", "900"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()} modalSize="compact" >
      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </main>
  )
  
}
