import { describe, Try } from 'riteway';
import {convertFromCtoF, calculateAvgDailyTemp} from '../utils/helpers'

describe('convertFromCtoF()', async assert => {
  const should = 'return a temperature of 32 in Fahrenheit given a temperature of 0 in Celsius';

  assert({
    given: '0',
    should,
    actual: convertFromCtoF(0),
    expected: 32
  });

});


describe('calculateAvgDailyTemp()', async assert => {
    const should = 'return an average temperature of 4.5 given an array of temperatures from 1 - 8';

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
  
    assert({
      given: 'an array of temperatures in celsius',
      should,
      actual: calculateAvgDailyTemp(temperatures),
      expected: 4.5
    });
  });
