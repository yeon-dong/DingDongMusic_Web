import { useCallback, useState } from "react";
import {
  Container,
  SearchBarContainer,
  SearchIcon,
} from "./MobileSearchButton.style";
import SearchBar from "./SearchBar";

const MobileSearchButton = ({
  isMobileSearchBarShow,
  onMobileSearchButtonClick,
  inputText,
  onInputTextChange,
}) => {
  return (
    <Container>
      <button onClick={onMobileSearchButtonClick}>
        <SearchIcon>
          <img src="/search_icon_white.svg" alt="Search Icon" />
        </SearchIcon>
      </button>
      <SearchBarContainer $isShow={isMobileSearchBarShow}>
        <SearchBar
          inputText={inputText}
          onInputTextChange={onInputTextChange}
        />
      </SearchBarContainer>
    </Container>
  );
};

export default MobileSearchButton;
