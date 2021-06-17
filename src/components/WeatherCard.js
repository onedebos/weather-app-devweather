import { Box, Icon, Stack, Text } from '@chakra-ui/react';

const WeatherCard = ({ temp, date, avgTemp, icon, isCelsius }) => {
	return (
		<Box rounded="lg" backgroundColor="#F4F6FB" py="10">
			<Stack direction="column" justifyContent="center" alignItems="center">
				<Icon fontSize="xx-large" as={icon} color="#606BEE" />
				<Text fontWeight="bold" fontSize="lg" color="gray.500">
					{date}
				</Text>
				<Text textAlign="center" fontWeight="semibold">
					{' '}
					<Text fontWeight="semibold">Temperature now:</Text> {Math.round(temp)}
					{isCelsius ? '°C' : '°F'}
				</Text>
				<Text textAlign="center" color="gray.500">
					<Text fontWeight="semibold">Avg Daily Temperature:</Text> {Math.round(avgTemp)}
					{isCelsius ? '°C' : '°F'}
				</Text>
			</Stack>
		</Box>
	);
};

export default WeatherCard;
