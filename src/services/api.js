import axios from "axios";

export const fetchCountries = async (countryName) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  return [response.data];
};

// import axios from "axios";

// axios.defaults.baseURL = "https://restcountries.eu/rest/v2";

// export const fetchCountries = async (countryName) => {
//   const params = "fields=name;capital;population;flag;languages";
//   const response = await axios.get(`/name/${countryName}?${params}`);
//   return response.data;
// };
