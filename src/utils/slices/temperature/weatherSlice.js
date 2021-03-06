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
		weather: null,
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
		setWeather: (state, { payload }) => {
			state.weather = payload;
		},
		setMessage: (state, { payload }) => {
			state.message = payload;
		},
	},
});

export const { setCelsius, setError, setLoading, setWeather, setMessage } = weatherSlice.actions;

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;

// Get Weather
export const getWeather = (location) => {
	return async (dispatch) => {
		dispatch(setLoading(true));
		dispatch(setError(null));
		
		try {
			const response = await fetchWeatherForecast(location);
			const currWeather = await fetchCurrWeather(location);

			const {city, list} = response.data

			const weatherData = {
				city: city.name,
				currentTemp: currWeather.data.main.temp,
				temperatures: [
					{
						date: moment(list[0].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(list.slice(0, 7)),
						tempAtDiffTimes: list.slice(0, 7)
					},
					{
						date: moment(list[8].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(list.slice(8, 15)),
						tempAtDiffTimes: list.slice(8, 15)
					},
					{
						date: moment(list[16].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(list.slice(16, 23)),
						tempAtDiffTimes: list.slice(16, 23)
					},
					{
						date: moment(list[24].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(list.slice(24, 31)),
						tempAtDiffTimes: list.slice(24, 31)
					},
					{
						date: moment(list[32].dt_txt).format('dddd, MMMM Do'),
						avgTemp: calculateAvgDailyTemp(list.slice(32, 39)),
						tempAtDiffTimes: list.slice(32, 39)
					},
				],
			};

			dispatch(setWeather(weatherData));
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
