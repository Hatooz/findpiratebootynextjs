export type WeatherForcastData = {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export const getWeatherForcast = async (): Promise<WeatherForcastData[]> => {
  const res = await fetch(`${process.env.BASE_URL}/api/weatherforecast`);

  //   console.log(res);
  return res.json();
};
