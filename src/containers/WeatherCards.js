import { Container, Heading, Button, Grid } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import WeatherCard from '../components/WeatherCard';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { convertFromCtoF } from '../utils/helpers';

const WeatherCards = () => {
	const { isCelsius, weather } = useWeatherSlice();
	const currTemp = weather && weather.currentTemp;
	const city = weather && weather.city;

	return (
		<Container mt="20" maxWidth="100%">
			<Heading> Weather Forecast for {city}</Heading>

			<Button>Prev</Button>
			<Grid templateColumns="1fr 1fr 1fr" alignItems="center" gridGap="5">
				{weather &&
					weather.temperatures.map((temp) => (
						<WeatherCard
							temp={isCelsius ? currTemp : convertFromCtoF(currTemp)}
							avgTemp={isCelsius ? temp.avgTemp : convertFromCtoF(temp.avgTemp)}
							date={temp.date}
							icon={SunIcon}
							isCelsius={isCelsius}
						/>
					))}
			</Grid>
			<Button>Next</Button>
		</Container>
	);
};

export default WeatherCards;
