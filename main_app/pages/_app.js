import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import store from '../redux/store';
import { Provider } from 'react-redux';

const { chains, provider } = configureChains(
	[polygonMumbai],
	[publicProvider()]
);
const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	chains,
});
const wagmiClient = createClient({
	autoConnect: false,
	connectors,
	provider,
});

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider
					chains={chains}
					theme={darkTheme({
						accentColor: '#4e25b8',
						accentColorForeground: 'white',
						borderRadius: 'large',
						fontStack: 'rounded',
						overlayBlur: 'large',
					})}
				>
					<Component {...pageProps} />
				</RainbowKitProvider>
			</WagmiConfig>
		</Provider>
	);
}
