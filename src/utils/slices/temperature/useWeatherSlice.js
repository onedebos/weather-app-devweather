import { useDispatch, useSelector } from 'react-redux';
import { setCelsius, weatherSelector, getWeather } from './weatherSlice';

const useWeatherSlice = () => {
	const dispatch = useDispatch();
	const { isCelsius, error, loading, temperatures, message } = useSelector(weatherSelector);

	return {
		dispatchSetCelsius: (isCelsius) => dispatch(setCelsius(isCelsius)),
		dispatchGetWeather: () => dispatch(getWeather()),
		loading,
		error,
		isCelsius,
		temperatures,
		message
	};
};

export { useWeatherSlice };
