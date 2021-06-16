import { Slide, Container, Grid, Icon, Stack, Heading, Button } from '@chakra-ui/react';
import { SunIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Sidebar from '../containers/Sidebar';
import Searchbar from '../components/Searchbar';
import UserInfo from '../components/UserInfo';
import Loading from '../components/Loading';
import WeatherCard from '../components/WeatherCard';

const Index = () => {
	const [activeTempType, setActiveTempType] = useState({
		celsius: true,
		fahrenheit: false,
	});

	const loading = false;

	if (loading) {
		return <Loading />;
	}

	return (
		<Slide direction="bottom" in={true}>
			<Container maxWidth="100%" margin="0" padding="0" transition="ease-in-out" transitionDuration="">
				<Grid templateColumns="1fr 5fr">
					{/* Sidebar */}
					<Sidebar activeTempType={activeTempType} />
					{/* Content */}
					<Container maxWidth="90%">
						{/* Searchbar */}
						<Grid templateColumns="5fr 1fr" alignItems="center" gridGap="5">
							<Searchbar />
							<UserInfo />
						</Grid>

						{/* Weather Cards */}
						<Container mt="20" maxWidth="100%">
							<Heading> Weather Forecast for City</Heading>

							<Button>Prev</Button>
							<Grid templateColumns="1fr 1fr 1fr" alignItems="center" gridGap="5">
								<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
								<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
								<WeatherCard temp="20" avgTemp="20" date="Monday, 11 Jan" icon={SunIcon} />
							</Grid>
							<Button>Next</Button>
						</Container>

            {/* Weather Charts */}
            <Container mt="20" maxWidth="100%">
							<Heading> Temperature Chart </Heading>

							
						</Container>
					</Container>
				</Grid>
			</Container>
		</Slide>
	);
};

export default Index;
