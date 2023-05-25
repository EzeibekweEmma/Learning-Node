const axios = require("axios");

// Replace the API_KEY with your actual API key.
const API_KEY = "YOUR_API_KEY";

async function geocodeAddress(address) {
  // This code makes a request to the Visual Crossing Web Services API to fetch weather data for a given address.
  // The address is encoded and appended to the URL as a query parameter
  const encodeUrlCountry = encodeURIComponent(address);
  try {
    const response = await axios({
      method: "GET",
      url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeUrlCountry}?unitGroup=us&include=days%2Chours%2Calerts%2Ccurrent&key=${API_KEY}&contentType=json`,
    });

    const { resolvedAddress, latitude, longitude, days } = response.data;

    console.log({
      address: resolvedAddress,
      date: days[0].datetime,
      latitude,
      longitude,
      tempreture: days[0].temp,
      humidity: days[0].humidity,
      windspeed: days[0].windspeed,
      description: days[0].description,
    });
  } catch (error) {
    if (error.code === "ENOTFOUND")
      console.log("Error: Unable to connect to API servers!");
    else if (error.response.status === 400)
      console.log(
        "Error: Invalid address location. Please check your address!"
      );
    else if (error.response.status === 404) console.log("Error: Not Found!");
    else if (error.response.status === 401)
      console.log("Error:", error.response.data);
    else console.log("Error: Umable to get your result!");
  }
}

module.exports = { geocodeAddress };
