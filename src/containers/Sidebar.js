import SidebarItem from '../components/SidebarItem';
import { Container } from '@chakra-ui/layout';
import { Flex, Heading, Box } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import {useWeatherSlice} from '../utils/slices/temperature/useWeatherSlice'

const Sidebar = () => {
	const {dispatchSetCelsius, isCelsius} = useWeatherSlice()

	return (
		<Container height="100vh" maxWidth="100%" backgroundColor="#606BEE">
			<Flex mt="10" color="white" gridGap="2" alignItems="center">
				<Image
					width="30"
					height="30"
					src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
				/>
				<Heading size="sm">DevWeatherWatch</Heading>
			</Flex>

			<Box mt="20">
				<SidebarItem
					menuItem="Celsius"
					active={isCelsius}
					setIsCelsius={()=>dispatchSetCelsius(true)}
					icon={TriangleUpIcon}
				/>
				<SidebarItem
					menuItem="Fahrenheit"
					active={!isCelsius}
					setIsCelsius={()=>dispatchSetCelsius(false)}
					icon={TriangleDownIcon}
				/>
			</Box>
		</Container>
	);
};

export default Sidebar;
