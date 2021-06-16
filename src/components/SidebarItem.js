import { Icon, Text, Container, Stack } from '@chakra-ui/react';


const SidebarItem = ({ menuItem, active, setActiveTempType, icon }) => {
	return (
		<Stack pl="5" cursor="pointer" backgroundColor="whiteAlpha.200" rounded="md" py="3" onClick={setActiveTempType} mt="10" width="100%" color="white" opacity={active ? '1' : '0.5'}>
			<Text fontWeight="semibold">
				<Icon mr="1" as={icon} /> 
                {menuItem}
			</Text>
		</Stack>
	);
};

export default SidebarItem;
