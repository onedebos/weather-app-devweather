import { Container, Grid } from '@chakra-ui/layout';
import { useState } from 'react';
import Sidebar from '../containers/Sidebar';
import Searchbar from '../components/Searchbar';

const Index = () => {
	const [activeTempType, setActiveTempType] = useState({
		celsius: true,
		fahrenheit: false,
	});

	return (
		<Container maxWidth="100%" margin="0" padding="0">
			<Grid templateColumns="1fr 5fr">
				<Sidebar activeTempType={activeTempType} />
				<Container maxWidth="100ch">
          <Searchbar />
        </Container>
			</Grid>
		</Container>
	);
};

export default Index;
