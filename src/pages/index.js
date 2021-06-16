import { Slide, Container, Grid, Heading, Button } from '@chakra-ui/react';
import Sidebar from '../containers/Sidebar';
import Loading from '../components/Loading';
import WeatherCards from '../containers/WeatherCards';
import Topbar from '../containers/Topbar';
import Chart from '../containers/Chart';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';

const Index = () => {
	const { loading, error, tempType, temperatures } = useWeatherSlice();

	if (loading) {
		return <Loading />;
	}

	return (
		<Slide direction="bottom" in={true}>
			<Container maxWidth="100%" margin="0" padding="0" transition="ease-in-out" transitionDuration="">
				<Grid templateColumns="1fr 5fr">
					{/* Sidebar */}
					<Sidebar />
					{/* Content */}
					<Container maxWidth="90%">
						<Topbar />
						<WeatherCards />
						<Chart />
					</Container>
				</Grid>
			</Container>
		</Slide>
	);
};

export default Index;
