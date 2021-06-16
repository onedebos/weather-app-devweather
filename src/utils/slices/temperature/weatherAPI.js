import axios from 'axios';
import { API_ENDPOINT } from '../../constants';

export const weatherAPI = {
	// fetch weather
	fetchWeather: () => {
		return axios.get(API_ENDPOINT);
	},
};
