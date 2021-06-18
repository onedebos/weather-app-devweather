import { useDispatch, useSelector } from 'react-redux';
import { setCelsius, weatherSelector, getWeather } from './weatherSlice';

const useWeatherSlice = () => {
	const dispatch = useDispatch();
	const { isCelsius, error, loading, weather, message } = useSelector(weatherSelector);

	return {
		dispatchSetCelsius: (isCelsius) => dispatch(setCelsius(isCelsius)),
		dispatchGetWeather: (location = "Munich,de") => dispatch(getWeather(location)),
		loading,
		error,
		isCelsius,
		weather,
		message
	};
};

export { useWeatherSlice };
