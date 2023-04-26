import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Weather from "./Weather";
import WeatherData from "./WeatherData";
import { weatherData } from "../DataStore/Data";

export default function Dashboard() {
  const [defaultData, setDefaultData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setDefaultData(weatherData);
  }, []);
  return (
    <>
      <Navigation setToggle={setToggle} toggle={toggle} />
      {toggle ? (
        <WeatherData
          defaultData={defaultData}
          setDefaultData={setDefaultData}
        />
      ) : (
        <Weather defaultData={defaultData} />
      )}
    </>
  );
}
