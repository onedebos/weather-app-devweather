import React from 'react'
import { Box, Icon, Stack, Text } from '@chakra-ui/react';

const WeatherCard = ({ temp, date, avgTemp, icon, isCelsius }) => {
	return (
		<Box className="weather-card" rounded="lg" backgroundColor="#F4F6FB" py="10">
			<Stack direction="column" justifyContent="center" alignItems="center">
				<Icon fontSize="xx-large" as={icon} color="#606BEE" />
				<Text fontWeight="bold" fontSize="lg" color="gray.500">
					{date}
				</Text>
				<Text textAlign="center" fontWeight="semibold">
					{' '}
					<span fontWeight="semibold">Temperature now:</span> <span className="temp-now">{Math.round(temp)}
					{isCelsius ? '°C' : '°F'}</span>
				</Text>
				<Text textAlign="center" color="gray.500">
					<span fontWeight="semibold">Avg Daily Temperature:</span> {Math.round(avgTemp)}
					{isCelsius ? '°C' : '°F'}
				</Text>
			</Stack>
		</Box>
	);
};

export default WeatherCard;
