import { Container, Grid, Box } from '@chakra-ui/react';
import Sidebar from '../containers/Sidebar';
import Loading from '../components/Loading';
import WeatherCards from '../containers/WeatherCards';
import Topbar from '../containers/Topbar';
import Chart from '../containers/Chart';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { useEffect } from 'react';

const Index = () => {
	const { loading, error, dispatchGetWeather, temperatures } = useWeatherSlice();

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
		<Box maxWidth="100%">
			<Grid templateColumns={{ base: '6fr', lg: '1fr 5fr' }}>
				{/* Sidebar */}
				<Sidebar />
				{/* Content */}
				<Container maxWidth="90%">
					<Topbar />
					<WeatherCards />
					<Chart />
				</Container>
			</Grid>
		</Box>
	);
};

export default Index;
