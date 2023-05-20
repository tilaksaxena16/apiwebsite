import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

const Tempapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () =>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=cda77b075e4e0482bc93637a4ad38499`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);

    };

    fetchApi();

  }, [search])



  return (
    <>
      <div className='box'>
        <div>
          <input type='search'
          value={search}
            className='input'
            onChange={(event) => {
              setSearch(event.target.value)
            }} />
        </div>

        {!city ? (
            <p className='errormsg'>No Data Found</p>
          ) : (
            <div>
              <div className='info'>
                <h2 className='location'>
                  <i className="fa-solid fa-street-view"></i> {search}
                </h2>
                <h1 className='temp'>
                  {city.temp}°Cel
                </h1>
                <h3 className='tempmin_max'>min : {city.temp_min}°Cel | max : {city.temp_max}°Cel </h3>
                <h3 className='tempmin_max'>Humidity : {city.humidity}</h3>
              </div>
            </div>
          )}
      </div>

    </>
  );
};

export { Tempapp };