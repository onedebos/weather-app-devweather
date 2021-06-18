import { Box, Stack, Avatar, Icon, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'

const UserInfo = () => {
	return (
		<Box
			display={{ lg: 'block', base: 'none' }}
			border="1px"
			p="2"
			rounded="md"
			borderColor="#D0D5DA"
			mt="10"
			cursor="pointer"
			width={{ lg: '95%', base: '100%' }}
		>
			<Stack direction="row" justifyContent="" fontSize="sm" alignItems="center">
				<Box>
					<Avatar size="xs" />
				</Box>
				<Text color="gray.500">
					Harrison Sehik <Icon as={ChevronDownIcon} color="#D0D5DA" />
				</Text>
			</Stack>
		</Box>
	);
};

export default UserInfo;
