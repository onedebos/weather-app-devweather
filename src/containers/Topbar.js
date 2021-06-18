import { Grid } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import UserInfo from '../components/UserInfo';
import React from 'react'

const Topbar = () => {
	return (
		<Grid templateColumns={{base:"6fr", lg:"5fr 1fr"}} alignItems="center" gridGap={{base: "0", lg:"5"}}>
			<Searchbar />
			<UserInfo />
		</Grid>
	);
};

export default Topbar;
