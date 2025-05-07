import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import BodyOnlyExample from '../Weathercard'; // Make sure the path and name match your file
import './Home.css'; // Home-specific CSS

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
      );
      setData(response.data.list);
    } catch (error) {
      console.error("API error:", error);
      alert("City not found. Please enter a valid city name.");
    }
  };

  return (
    <div>
      <h1>Weather App Home</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="Enter your City Name" 
          value={cityName}
          onChange={(e) => setCityName(e.target.value)} 
        />
        <br />
        <br />
        <Button type="submit">GO Weather</Button>
      </form>

      <div className="weather-container">
        {data.map((e, index) => (
          <div key={index} className="card-container">
            <BodyOnlyExample
              date={e.dt_txt}
              temp={e.main.temp}
              min={e.main.temp_min}
              max={e.main.temp_max}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

