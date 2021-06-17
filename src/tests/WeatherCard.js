import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import WeatherCard from '../components/WeatherCard';


describe('Hello component', async assert => {
 const temp = 20;
  const $ = render(<WeatherCard temp={temp} date="Monday, 11 Jun" avgTemp={temp} icon="" isCelsius={true} />);
  const contains = match($('.weather-card').html());
  assert({
    given: 'a WeatherCard',
    should: 'Render a date and average temperature in Celsius.',
    actual: contains(temp),
    expected: `Temperature now: 20°C!`
  });
});