import { createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from './weatherAPI';
import moment from 'moment';
import { calculateAvgDailyTemp } from '../../helpers';

const { fetchWeatherForecast, fetchCurrWeather } = weatherAPI;

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		isCelsius: true,
		loading: false,
		error: null,
		temperatures: null,
		message: ''
	},
	reducers: {
		setCelsius: (state, { payload }) => {
			state.isCelsius = payload;
		},
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setLoading: (state, { payload }) => {
			state.loading = payload;
		},
		setTemperatures: (state, { payload }) => {
			state.temperatures = payload;
		},
		setMessage: (state, { payload }) => {
			state.message = payload;
		},
	},
});

export const { setCelsius, setError, setLoading, setTemperatures, setMessage } = weatherSlice.actions;

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;

// Get Weather
export const getWeather = () => {
	return async (dispatch) => {
		dispatch(setLoading(true));
		dispatch(setError(null));
		// dispatch(setMessage(null));
		try {
			const response = await fetchWeatherForecast();
			const currWeather = await fetchCurrWeather();

			const weatherData = {
				city: response.data.city.name,
				currentTemp: currWeather.data.main.temp,
				temperatures: [
					{
						date: moment(response.data.list[0].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(response.data.list.slice(0, 7)),
						tempAtDiffTimes: response.data.list.slice(0, 7)
					},
					{
						date: moment(response.data.list[8].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(response.data.list.slice(8, 15)),
						tempAtDiffTimes: response.data.list.slice(8, 15)
					},
					{
						date: moment(response.data.list[16].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(response.data.list.slice(16, 23)),
						tempAtDiffTimes: response.data.list.slice(16, 23)
					},
					{
						date: moment(response.data.list[24].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(response.data.list.slice(24, 31)),
						tempAtDiffTimes: response.data.list.slice(24, 31)
					},
					{
						date: moment(response.data.list[32].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(response.data.list.slice(32, 39)),
						tempAtDiffTimes: response.data.list.slice(32, 39)
					},
				],
			};

			console.log(weatherData);
			dispatch(setTemperatures(weatherData));
			dispatch(setLoading(false));
		} catch (error) {
			console.log(error);
			console.log(error.message);
			dispatch(setError(true));
			dispatch(setMessage("Something went wrong while trying to fetch the weather information."));
			dispatch(setLoading(false));
		}
	};
};
