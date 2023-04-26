import React from "react";

export default function WeatherData({ defaultData, setDefaultData }) {
  const handleEnable = (id) => {
    const data = defaultData.map((city) => {
      if (city.id === id) {
        return { ...city, enable: !city.enable };
      } else {
        return city;
      }
    });
    console.log(data);
    setDefaultData(data);
  };
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                City Name
              </th>
              <th scope="col" class="px-6 py-3">
                State Name
              </th>
              <th scope="col" class="px-6 py-3">
                windSpeed
              </th>
              <th scope="col" class="px-6 py-3">
                Pressure
              </th>
              <th scope="col" class="px-6 py-3">
                Percip Value
              </th>
              <th scope="col" class="px-6 py-3">
                cloudStatus
              </th>
              <th scope="col" class="px-6 py-3">
                currentTemp
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {defaultData &&
              defaultData.map((data) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.cityName}
                    </th>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.stateName}
                    </td>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.windSpeed}
                    </td>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.pressure}
                    </td>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.percipValue}
                    </td>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.cloudStatus}
                    </td>
                    <td class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {data.currentTemp}
                    </td>
                    <td class="px-6 py-4">
                      <button
                        style={{
                          backgroundColor: `${data.enable ? "lightgreen" : ""}`,
                          padding: "6px"
                        }}
                        onClick={() => {
                          handleEnable(data.id);
                        }}
                      >
                        Enabe
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
