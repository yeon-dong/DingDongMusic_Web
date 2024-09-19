import { useCallback, useEffect, useRef, useState } from "react";
import CartButton from "./CartButton";
import { CartButtonWrapper, Container, SearchIcon } from "./SearchBar.style";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = ({ inputText, onInputTextChange }) => {
  const navigate = useNavigate();

  const keyword = useDebounce(inputText, 500);

  useEffect(() => {
    const searchKeyword = keyword.trim().replace(" ", "-");

    if (searchKeyword !== "") {
      navigate(`/search/${searchKeyword}`);
    }
  }, [keyword]);

  const handleInputClick = useCallback(() => {
    const searchKeyword = keyword.trim().replace(" ", "-");

    navigate(`/search${searchKeyword.length > 0 ? `/${searchKeyword}` : ""}`);
  }, [keyword]);

  return (
    <Container>
      <input
        placeholder="어떤 노래를 구매하고 싶으신가요?"
        value={inputText}
        onChange={onInputTextChange}
        onClick={handleInputClick}
      />
      <SearchIcon>
        <img src="/search_icon.svg" />
      </SearchIcon>
      <CartButtonWrapper>
        <CartButton />
      </CartButtonWrapper>
    </Container>
  );
};

export default SearchBar;
