import { useDispatch, useSelector } from 'react-redux';
import { setCelsius, weatherSelector } from './weatherSlice';

const useWeatherSlice = () => {
	const dispatch = useDispatch();
	const { isCelsius, error, loading, temperatures } = useSelector(weatherSelector);

	return {
		dispatchSetCelsius: (isCelsius) => dispatch(setCelsius(isCelsius)),
		loading,
		error,
		isCelsius,
		temperatures,
	};
};

export { useWeatherSlice };
