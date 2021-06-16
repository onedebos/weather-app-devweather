import { Grid } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import UserInfo from '../components/UserInfo';

const Topbar = () => {
	return (
		<Grid templateColumns="5fr 1fr" alignItems="center" gridGap="5">
			<Searchbar />
			<UserInfo />
		</Grid>
	);
};

export default Topbar;
