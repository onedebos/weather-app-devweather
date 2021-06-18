import { Container, Grid, Box, Fade } from '@chakra-ui/react';
import Sidebar from '../containers/Sidebar';
import Loading from '../components/Loading';
import WeatherCards from '../containers/WeatherCards';
import Topbar from '../containers/Topbar';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { useEffect } from 'react';

const Index = () => {
	const { loading, dispatchGetWeather } = useWeatherSlice();

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			return dispatchGetWeather();
		}
		return () => (mounted = false);
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<Fade in={true}>
			<Box maxWidth="100%">
				<Grid templateColumns={{ base: '6fr', lg: '1fr 5fr' }}>
					{/* Sidebar */}
					<Sidebar />
					{/* Content */}
					<Container maxWidth="90%">
						<Topbar />
						<WeatherCards />
					</Container>
				</Grid>
			</Box>
		</Fade>
	);
};

export default Index;
