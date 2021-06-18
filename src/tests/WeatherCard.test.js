import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import WeatherCard from '../components/WeatherCard';
import { SunIcon } from '@chakra-ui/icons';

describe('WeatherCard Component', async (assert) => {
	const temp = 20;
	const tempF = 32;
	let $ = render(<WeatherCard temp={temp} date="Monday, 11 Jun" avgTemp={temp} icon={SunIcon} isCelsius={true} />);
	let contains = match($('.temp-now').html());

	assert({
		given: 'a WeatherCard component with temperatures at 20degres celsius',
		should: 'Renders a date and average temperature in Celsius.',
		actual: contains(temp) + '°C',
		expected: `20°C`,
	});

	$ = render(<WeatherCard temp={tempF} date="Monday, 11 Jun" avgTemp={tempF} icon={SunIcon} isCelsius={false} />);
	contains = match($('.temp-now').html());

	assert({
		given: 'a WeatherCard component with temperatures at 32 degrees Fahrenheit',
		should: 'Renders a date and average temperature in Fahrenheit.',
		actual: contains(tempF) + '°F',
		expected: `32°F`,
	});
});
