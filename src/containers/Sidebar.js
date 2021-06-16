import SidebarItem from '../components/SidebarItem';
import { Container } from '@chakra-ui/layout';
import { Flex, Heading, Box } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { useState } from 'react';
import { CELSIUS, FAHRENHEIT } from '../utils/constants';

const Sidebar = () => {
	const [activeTempType, setActiveTempType] = useState({
		celsius: true,
		fahrenheit: false,
	});

	const triggerTempTypeChange = (tempType) => {
		if (tempType === CELSIUS) setActiveTempType({ celsius: true, fahrenheit: false });
		if (tempType === FAHRENHEIT) setActiveTempType({ celsius: false, fahrenheit: true });
	};

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
					active={activeTempType.celsius}
					setActiveTempType={() => triggerTempTypeChange(CELSIUS)}
					icon={TriangleUpIcon}
				/>
				<SidebarItem
					menuItem="Fahrenheit"
					active={activeTempType.fahrenheit}
					setActiveTempType={() => triggerTempTypeChange(FAHRENHEIT)}
					icon={TriangleDownIcon}
				/>
			</Box>
		</Container>
	);
};

export default Sidebar;
