// App.tsx
import React, { useState } from "react";
import { Country } from "./types/countries";
import "./styles/App.css";
import fetchCountry from "./utils/fetchCountry";
import SearchInput from "./components/SearchInput";
import CountryList from "./components/CountryList";
import AuthorzieButton from "./components/AuthorizeButton";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [amountSEK, setAmountSEK] = useState<string>("");

  const handleSearch = async () => {
    await fetchCountry(searchTerm, setIsLoading, setCountries);
  };

  return (
    <div className="Main-container">
      <AuthorzieButton></AuthorzieButton>
      <h1>Swedish currency exchange</h1> 
      <SearchInput
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
      />
      <input
        type="number"
        value={amountSEK}
        onChange={(e) => setAmountSEK(e.target.value)}
        placeholder="Amount in SEK"
      />
      {isLoading && <p>Loading...</p>}
      <CountryList countries={countries} amountSEK={amountSEK} />
    </div>
  );
};

export default App;
