import { Country } from "../types/countries";
import getCookieValue from "./getCookie";

const fetchCountry = async (
  searchTerm: string,
  setIsLoading: (isLoading: boolean) => void,
  setCountries: (countries: React.SetStateAction<Country[]>) => void
) => {
  if (!searchTerm) return;
  setIsLoading(true);
  const token = getCookieValue("token");

  try {
    const response = await fetch(
      `http://localhost:3000/country?name=${searchTerm}`,
      {
        headers: {
          "X-JWT-Token": `${token}`,
        },
      }
    );

    const data = await response.json();
    setIsLoading(false);
    if (data) {
      const newCountry: Country = {
        officialName: data.officialName,
        commonName: data.commonName,
        population: data.population,
        currency: {
          code: data.currency.code,
          name: data.currency.name,
          symbol: data.currency.symbol,
          conversionRateToSEK: data.currency.conversionRateToSEK,
        },
      };
      setCountries((prevCountries) => [...prevCountries, newCountry]);
    }
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    setIsLoading(false);
  }
};

export default fetchCountry;
