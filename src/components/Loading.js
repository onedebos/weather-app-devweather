import { Box, Stack, Heading, Text, CircularProgress } from '@chakra-ui/react';



const Loading = () => {
	return (
		<Box transition="ease-in-out" transitionDuration="500" height="100vh" backgroundColor="#606BEE">
			<Stack justifyContent="center" height="100vh" alignItems="center" direction="column" color="white">
            <CircularProgress size="20" isIndeterminate color="green.300" />
				<Heading size="lg">
					Loading...
				</Heading>
                <Text opacity="0.8">Grabbing all that good stuff!</Text>
			</Stack>
		</Box>
	);
};

export default Loading;
