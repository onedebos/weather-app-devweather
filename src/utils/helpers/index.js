export const calculateAvgDailyTemp = (temperatures) => {
	let sum = 0;
	temperatures.map((temp) => {
		sum += temp.main.temp;
	});

	return sum / 8;
};

export const convertFromCtoF = (celsius) => {
	return (celsius * 9) / 5 + 32;
};
