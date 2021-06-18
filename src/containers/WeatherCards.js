import { Flex, Heading, Button, Box, Container } from '@chakra-ui/react';
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
			<Heading mb="2"> Weather Forecast for {city}</Heading>

			<Flex gridGap="2" mb="2">
				<Button
					className="prev"
					onClick={() => scroll(false)}
					backgroundColor="purple.200"
					display={{ base: 'none', lg: pagination > 0 ? 'block' : 'none' }}
				>
					Prev
				</Button>

				<Button
					className="next"
					onClick={() => scroll(true)}
					backgroundColor="purple.500"
					display={{ base: 'none', lg: pagination != 2 ? 'block' : 'none' }}
				>
					Next
				</Button>
			</Flex>

			<Box maxWidth="100%">
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
								<SwiperSlide>
									<WeatherCard
										key={i}
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
		</Box>
	);
};

export default WeatherCards;
