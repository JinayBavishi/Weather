import logo from './logo.svg';
import './App.css';
import Weathercard from './component/Weathercard0';
import Temp from "./component/temp"
import React, { useState, useEffect } from 'react';

function App() {
  const [dark, setMode] = useState(false)
  return (
    <>
<div className={dark ? 'App dark-mode' : 'App'}>
      <center>

        <header className="App-header">
          <h1>5-Day Forecast</h1>
        </header>
        
          {/* <div>
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            
            id="search"
            className="searchTerm"
            value=""
          // onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <button
          className="searchButton"
          type="button"
          onClick="">
          Search
        </button><br /> */}
          <Temp />
          <br/>
          <br/>
          <br/>
          <br/>
          
          <div className='switch'>
            <input type="checkbox" onChange={() => setMode(!dark)} />
            Dark Mode
          </div>
          {/* <Weathercard />
        <Weathercard />
        <Weathercard />
        <Weathercard />
        <Weathercard /> */}
          {/* </div> */}
      </center>
      </div>
    </>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import Weathercard from "./component/Weathercard"
// import "./App.css";

// const Temp = () => {
//   const [searchValue, setSearchValue] = useState("Mumbai");
//   const [tempInfo, setTempInfo] = useState({});

//   const getWeatherInfo = async () => {
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=18ea11bf00dfa525ec1f5856bb2cea19`;

//       let res = await fetch(url);
//       let data = await res.json();

//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const myNewWeatherInfo = {
//         temp,
//         humidity,
//         pressure,
//         weathermood,
//         name,
//         speed,
//         country,
//         sunset,
//       };

//       setTempInfo(myNewWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeatherInfo();
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="search..."
//             autoFocus
//             id="search"
//             className="searchTerm"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           <button
//             className="searchButton"
//             type="button"
//             onClick={getWeatherInfo}>
//             Search
//           </button>
//         </div>
//       </div>

//       {/* our temp card  */}
//       <Weathercard {...tempInfo} />
//     </>
//   );
// };

// export default Temp; 