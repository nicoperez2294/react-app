import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => {
    return  <div>
                <Location city={"Montevideo, Uruguay"} />
                <WeatherData/>
            </div>
};

export default WeatherLocation;