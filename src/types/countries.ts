export interface Country {
  officialName: string;
  commonName: string;
  population: number;
  currency: {
    code: string;
    name: string;
    symbol: string;
    conversionRateToSEK: number;
  };
}

export interface CountryListProps {
  countries: Country[];
  amountSEK: string;
}
