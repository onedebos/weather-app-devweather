import { Container, Heading, Button, Grid, Box } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import WeatherCard from '../components/WeatherCard';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { convertFromCtoF } from '../utils/helpers';

const WeatherCards = () => {
	const { isCelsius, weather } = useWeatherSlice();
	const currTemp = weather && weather.currentTemp;
	const city = weather && weather.city;

	return (
		<Box mt={{base:"5", lg:"20"}} width="100%" maxWidth="100%">
			<Heading mb="2"> Weather Forecast for {city}</Heading>

			<Button display={{base:"none", lg:"block"}}>Prev</Button>
			<Grid templateColumns={{lg:"1fr 1fr 1fr", base:"1fr"}} alignItems="center" gridGap="5">
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
			<Button display={{base:"none", lg:"block"}}>Next</Button>
		</Box>
	);
};

export default WeatherCards;
