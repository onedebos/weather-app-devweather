import axios from 'axios';
import { API_ENDPOINT, API_BASE_URL } from '../../constants';

export const weatherAPI = {
	// fetch weather
	fetchWeatherForecast: (location = "Munich,de", queryType="forecast?q=") => {
		return axios.get(API_BASE_URL + queryType + location + API_ENDPOINT);
	},
	fetchCurrWeather: (location = "Munich,de", queryType="weather?q=") => {
		return axios.get(API_BASE_URL + queryType + location + API_ENDPOINT);
	},
};
