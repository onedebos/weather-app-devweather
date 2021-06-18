import { Container } from '@chakra-ui/layout';
import { Flex, Heading, Box, useToast } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import { useWeatherSlice } from '../utils/slices/temperature/useWeatherSlice';
import { CELSIUS, FAHRENHEIT } from '../utils/constants';
import Image from 'next/image';
import SidebarItem from '../components/SidebarItem';

const Sidebar = () => {
	const { dispatchSetCelsius, isCelsius } = useWeatherSlice();
	const toast = useToast();

	const showToastAndSwitchTempType = (isCelsius) => {
		dispatchSetCelsius(isCelsius);
		toast({
			title: 'Temperature Changed!',
			description: `Successfully switched to ${isCelsius ? CELSIUS : FAHRENHEIT}.`,
			status: 'success',
			duration: 2000,
			isClosable: true,
		});
	};

	return (
		<Container
			height={{ lg: '100vh' }}
			maxWidth="100%"
			width={{ base: '100%', lg: '320px' }}
			backgroundColor="#606BEE"
			pb={{ base: '5', lg: '0' }}
		>
			<Flex mt="10" color="white" gridGap="2" alignItems="center" justifyContent={{ base: 'center', lg: 'start' }}>
				<Image width="30" height="30" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
				<Heading size="sm">DevWeatherWatch</Heading>
			</Flex>

			<Box mt={{ lg: '20' }}>
				<SidebarItem
					menuItem="Celsius"
					active={isCelsius}
					setIsCelsius={() => showToastAndSwitchTempType(true)}
					icon={TriangleUpIcon}
				/>
				<SidebarItem
					menuItem="Fahrenheit"
					active={!isCelsius}
					setIsCelsius={() => showToastAndSwitchTempType(false)}
					icon={TriangleDownIcon}
				/>
			</Box>
		</Container>
	);
};

export default Sidebar;
