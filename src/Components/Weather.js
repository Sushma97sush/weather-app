import React from "react";

export default function Weather({ defaultData }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
          Weather Details
        </h2>
        <p className="m-2">
          Please select desired city from table to see weather details
        </p>

        <div className="  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {defaultData &&
            defaultData.map((city) => {
              if (city.enable) {
                return (
                  <div
                    class="max-w-sm rounded overflow-hidden shadow-lg "
                    key={city.id}
                  >
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{city.cityName}</div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Cloudstatus : {city.cloudStatus}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Pressure : {city.pressure}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        WindSpeed : {city.windSpeed}
                      </span>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
  );
}
