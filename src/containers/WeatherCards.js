import { Flex, Heading, Button, Box, Text, Stack, Container } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { convertFromCtoF } from '../utils/helpers';
import { useState, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import WeatherCard from '../components/WeatherCard';

const WeatherCards = () => {
	const { isCelsius, weather } = useWeatherSlice();
	const currTemp = weather && weather.currentTemp;
	const city = weather && weather.city;
	const [pagination, setPagination] = useState(0);

	SwiperCore.use([Navigation]);

	const pageIndex = useRef(0);

	const scroll = (scrollLeft = true) => {
		if (scrollLeft) {
			setPagination((pageIndex.current = pageIndex.current += 1));

			if (pageIndex.current > 2) {
				pageIndex.current = 2;
			}
		} else {
			setPagination((pageIndex.current = pageIndex.current -= 1));
		}
	};

	return (
		<Box mt={{ base: '5', lg: '20' }} width="100%" maxWidth="100%">
			<Heading mb="2" textAlign={{ base: 'center', lg: 'left' }}>
				{' '}
				Weather Forecast for{' '}
				<Text display="inline" color="#606BEE">
					{city}
				</Text>
			</Heading>
			<Flex gridGap="2" mb="2">
				<Button
					className="prev"
					width="100px"
					colorScheme="messenger"
					onClick={() => scroll(false)}
					display={{ base: 'none', lg: pagination > 0 ? 'block' : 'none' }}
					color="white"
				>
					Prev
				</Button>

				<Button
					className="next"
					width="100px"
					onClick={() => scroll(true)}
					colorScheme="purple"
					display={{ base: 'none', lg: pagination != 2 ? 'block' : 'none' }}
					color="white"
				>
					Next
				</Button>
			</Flex>

			<Box display={{ base: 'none', lg: 'block' }} maxWidth="100%">
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					navigation={{
						nextEl: '.next',
						prevEl: '.prev',
					}}
				>
					{weather &&
						weather.temperatures.map((temp, i) => {
							return (
								<SwiperSlide key={i}>
									<WeatherCard
										temp={isCelsius ? currTemp : convertFromCtoF(currTemp)}
										avgTemp={isCelsius ? temp.avgTemp : convertFromCtoF(temp.avgTemp)}
										date={temp.date}
										icon={SunIcon}
										isCelsius={isCelsius}
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</Box>

			<Box display={{ base: 'block', lg: 'none' }} pb="10">
				<Stack gridGap="5" direction="column">
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
				</Stack>
			</Box>
		</Box>
	);
};

export default WeatherCards;
