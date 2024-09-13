import { useMemo, useState } from "react";
import {
  Container,
  MusicImg,
  MusicImgContainer,
  MusicInfoContainer,
  MusicMainText,
  MusicPlayBtn,
  MusicPlayIcon,
  MusicSubText,
  SearchBoxContent,
  SearchBoxHeading,
} from "./SearchBox.style";
import musics from "../../data/data";
import { useParams } from "react-router-dom";

const SearchBox = () => {
  const [data, setData] = useState(musics);

  const encodedKeyword = useParams().keyword;
  const keyword = useMemo(() => {
    return Boolean(encodedKeyword)
      ? decodeURI(encodedKeyword).replace("-", " ")
      : "";
  }, [encodedKeyword]);

  const searchList = useMemo(() => {
    const regex = new RegExp(keyword, "i"); // 'i' 플래그는 대소문자 구분을 하지 않음

    const list = [];

    data.forEach((music) => {
      const containsKeyword = regex.test(music.musicName);

      if (containsKeyword) list.push(music);
    });

    return list;
  }, [data, keyword]);

  return (
    <Container>
      <SearchBoxHeading>검색 결과</SearchBoxHeading>
      <SearchBoxContent>
        {searchList.map((music, i) => (
          <MusicInfoContainer>
            <MusicImgContainer>
              <MusicImg src={`/images/${music.musicImgSrc}`} />
              <MusicPlayBtn>
                <MusicPlayIcon src="/images/Vector.svg" />
              </MusicPlayBtn>
            </MusicImgContainer>
            <MusicMainText>{music.musicName}</MusicMainText>
            <MusicSubText>{music.artistName}</MusicSubText>
          </MusicInfoContainer>
        ))}
      </SearchBoxContent>
    </Container>
  );
};

export default SearchBox;
