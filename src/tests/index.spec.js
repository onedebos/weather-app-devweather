const { calculateAvgDailyTemp, convertFromCtoF } = require('../utils/helpers');

describe('helper methods unit tests', () => {
	test('calculate average temperatures correctly', () => {
		const temperatures = [
			{
				main: {
					temp: 1,
				},
			},

			{
				main: {
					temp: 2,
				},
			},
			{
				main: {
					temp: 3,
				},
			},
			{
				main: {
					temp: 4,
				},
			},
			{
				main: {
					temp: 5,
				},
			},
			{
				main: {
					temp: 6,
				},
			},
			{
				main: {
					temp: 7,
				},
			},
			{
				main: {
					temp: 8,
				},
			},
		];
		const result = calculateAvgDailyTemp(temperatures);

		expect(result).toBe(4.5);
	});

	test('convert from C to F', () => {
		const result = convertFromCtoF(0);
		expect(result).toBe(32);
	});
});
