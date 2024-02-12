// CountryList.tsx
import React from "react";
import { CountryListProps } from "../types/countries";

const CountryList: React.FC<CountryListProps> = ({ countries, amountSEK }) => (
  <ul>
    {countries.map((country, index) => (
      <li className="List-item" key={country.commonName + index}>
        {country.officialName} - Population: {country.population} <br />
        Currency: {country.currency.name} ({country.currency.symbol})
        {amountSEK && (
          <span>
            <br />
            {amountSEK + " SEK gives: "}
            {(
              parseFloat(amountSEK) / country.currency.conversionRateToSEK
            ).toFixed(2)}{" "}
            {country.currency.code}
          </span>
        )}
      </li>
    ))}
  </ul>
);

export default CountryList;
