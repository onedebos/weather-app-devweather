import { Box, Icon, Stack, Text } from '@chakra-ui/react';
import { CELSIUS } from '../utils/constants';


const WeatherCard = ({ temp, date, avgTemp, icon, tempType }) => {
	return (
		<Box rounded="lg" backgroundColor="#F4F6FB" py="10">
			<Stack direction="column" justifyContent="center" alignItems="center">
				<Icon fontSize="xx-large" as={icon} color="#606BEE" />
                <Text fontWeight="bold" fontSize="lg" color="gray.500">{date}</Text>
				<Text fontWeight="semibold">{temp}° {tempType === CELSIUS ? "C" : "F"}</Text>
				<Text color="gray.500">{avgTemp}</Text>
			</Stack>
		</Box>
	);
};

export default WeatherCard;
