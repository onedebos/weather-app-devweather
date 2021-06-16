import { Container, Heading, Button, Grid } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import WeatherCard from '../components/WeatherCard';

const WeatherCards = () => {
	return (
		<Container mt="20" maxWidth="100%">
			<Heading> Weather Forecast for City</Heading>

			<Button>Prev</Button>
			<Grid templateColumns="1fr 1fr 1fr" alignItems="center" gridGap="5">
				<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
				<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
				<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
			</Grid>
			<Button>Next</Button>
		</Container>
	);
};

export default WeatherCards;
