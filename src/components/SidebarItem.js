import { Icon, Text, Box } from '@chakra-ui/react';


const SidebarItem = ({ menuItem, active, setIsCelsius, icon }) => {
	return (
		<Box pl="5" role="button" backgroundColor="whiteAlpha.200" rounded="md" py="3" onClick={setIsCelsius} mt={{lg:"10", base:"3"}} width="100%" color="white" opacity={active ? '1' : '0.5'}>
			<Text fontWeight="semibold">
				<Icon mr="1" as={icon} /> 
                {menuItem}
			</Text>
		</Box>
	);
};

export default SidebarItem;
