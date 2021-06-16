import { createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from './weatherAPI';

const { fetchWeather } = weatherAPI;

const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		isCelsius: true,
		loading: false,
		error: null,
		temperatures: null,
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
	},
});

export const { setCelsius, setError, setLoading, setTemperatures } = weatherSlice.actions;

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;

// Get Weather
export const getWeather = ({ token }) => {
	return async (dispatch) => {
		dispatch(setLoading(true));
		dispatch(setError(null));
		dispatch(setMessage(null));
		try {
			const response = await fetchWeather();
			console.log(response.data);
			// dispatch(setTemperatures(response.data.data));
			dispatch(setLoading(false));
		} catch (error) {
			console.log(error);
			console.log(error.message);
			dispatch(setError(true));
			dispatch(setLoading(false));
		}
	};
};
