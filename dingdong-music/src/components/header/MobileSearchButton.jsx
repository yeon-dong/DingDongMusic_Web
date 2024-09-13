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
}) => {
  return (
    <Container>
      <button onClick={onMobileSearchButtonClick}>
        <SearchIcon>
          <img src="/search_icon_white.svg" alt="Search Icon" />
        </SearchIcon>
      </button>
      <SearchBarContainer $isShow={isMobileSearchBarShow}>
        <SearchBar />
      </SearchBarContainer>
    </Container>
  );
};

export default MobileSearchButton;
