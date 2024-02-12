import React from "react";
import { SearchInputProps } from "../types/searchInput";

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
}) => (
  <>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
      placeholder="Search for a country"
    />
    <button onClick={onSearch}>Search</button>
  </>
);

export default SearchInput;
