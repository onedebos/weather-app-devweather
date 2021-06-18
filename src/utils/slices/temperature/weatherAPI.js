import axios from 'axios';
import { API_ENDPOINT, API_BASE_URL } from '../../constants';

export const weatherAPI = {
	// fetch weather
	fetchWeatherForecast: (location , queryType="forecast?q=") => {
		return axios.get(API_BASE_URL + queryType + location + API_ENDPOINT);
	},
	fetchCurrWeather: (location, queryType="weather?q=") => {
		return axios.get(API_BASE_URL + queryType + location + API_ENDPOINT);
	},
};
