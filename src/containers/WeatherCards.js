import { Flex, Heading, Button, Box } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { convertFromCtoF } from '../utils/helpers';
import { useState, useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import WeatherCard from '../components/WeatherCard';
import styles from '../utils/styles.module.css';
import React from 'react'




const WeatherCards = () => {
	const { isCelsius, weather } = useWeatherSlice();
	const currTemp = weather && weather.currentTemp;
	const city = weather && weather.city;
	const [pagination, setPagination] = useState(0);

	const pageIndex = useRef(0);

	const scroll = (scrollLeft = true) => {
		const widthOfCard = document.querySelector('.weather-card').offsetWidth;

		if (scrollLeft) {
			setPagination((pageIndex.current = pageIndex.current += 1));

			if (pageIndex.current > 2) {
				pageIndex.current = 2;
				return;
			}
			document.querySelector('.scroller').scrollTo({ left: widthOfCard + 25, behavior: 'smooth', top: 0 });
		} else {
			setPagination((pageIndex.current = pageIndex.current -= 1));
			if (pageIndex.current <= 0) return;

			document.querySelector('.scroller').scrollTo({ right: widthOfCard + 25, behavior: 'smooth', top: 0 });
		}
	};

	return (
		<Box mt={{ base: '5', lg: '20' }} width="100%" maxWidth="100%">
			<Heading mb="2"> Weather Forecast for {city}</Heading>

			<Flex gridGap="2" mb="2">
				{pagination > 0 && (
					<Button onClick={() => scroll(false)} backgroundColor="purple.200" display={{ base: 'none', lg: 'block' }}>
						Prev
					</Button>
				)}

				{pagination != 2 && (
					<Button onClick={() => scroll(true)} backgroundColor="purple.500" display={{ base: 'none', lg: 'block' }}>
						Next
					</Button>
				)}
			</Flex>

			<Box maxWidth="100%">
				<Flex className={`${styles.scrollable} scroller`} gridGap="5" flexDirection={{ base: 'column', lg: 'row' }}>
					{weather &&
						weather.temperatures.map((temp, i) => (
							<WeatherCard
								key={i}
								temp={isCelsius ? currTemp : convertFromCtoF(currTemp)}
								avgTemp={isCelsius ? temp.avgTemp : convertFromCtoF(temp.avgTemp)}
								date={temp.date}
								icon={SunIcon}
								isCelsius={isCelsius}
							/>
						))}
				</Flex>
			</Box>
		</Box>
	);
};

export default WeatherCards;
