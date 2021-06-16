import { Box, Input, Icon, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Searchbar = () => {
	return (
		<Stack margin="0" direction="row" mt="10">
			<Box backgroundColor="#F4F6FB" px="2" py="2" rounded="md">
				<Icon color="#606BEE" as={Search2Icon} />
			</Box>
			<Input ml="0" focusBorderColor="#606BEE" border="none" placeholder="Enter a City to start searching e.g Lagos...." />
		</Stack>
	);
};

export default Searchbar;
