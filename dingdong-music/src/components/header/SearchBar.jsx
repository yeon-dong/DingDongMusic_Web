import { useCallback } from "react";
import CartButton from "./CartButton";
import { Container, SearchIcon } from "./SearchBar.style";

const SearchBar = () => {
  const handleSearch = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("SEARCH: " + e.target.value);
    }
  }, []);

  return (
    <Container>
      <input
        placeholder="어떤 노래를 구매하고 싶으신가요?"
        onKeyDown={handleSearch}
      />
      <SearchIcon>
        <img src="./search_icon.svg" />
      </SearchIcon>
      <CartButton />
    </Container>
  );
};

export default SearchBar;
