import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import WeatherCard from '../components/WeatherCard';
import React from 'react';
import {SunIcon} from '@chakra-ui/icons'

describe('WeatherCard Component', async (assert) => {
	const temp = 20;
	const $ = render(<WeatherCard temp={temp} date="Monday, 11 Jun" avgTemp={temp} icon={SunIcon} isCelsius={true} />);
	const contains = match($('.temp-now').html());
	assert({
		given: 'a WeatherCard component with temperatures at 20degres celsius',
		should: 'Renders a date and average temperature in Celsius.',
		actual: contains(temp) + '°C',
		expected: `20°C`,
	});
});
