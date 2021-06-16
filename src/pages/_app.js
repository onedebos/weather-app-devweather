import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '../utils/slices/store';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
