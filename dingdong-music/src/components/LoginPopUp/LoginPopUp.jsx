import { useState } from "react";
import React from "react";
import {
  Container,
  InputAndTextContainer,
  InputContainer,
  PopUpContainer,
  PopUpInputID,
  PopUpInputPW,
  PopUpInputText,
  PopUpTitle,
} from "./LoginPopUp.style";

function LoginPopUp() {
  const [idPlaceholder, setIDPlaceholder] = useState("ID를 입력하세요"); // 기본 placeholder
  const [pwPlaceholder, setPWPlaceholder] = useState("비밀번호를 입력하세요"); // 기본 placeholder

  const handleFocus = (type) => {
    if (type === 0) {
      setIDPlaceholder("");
    } else if (type === 1) {
      setPWPlaceholder("");
    }
  };

  const handleBlur = (type) => {
    if (type === 0) {
      setIDPlaceholder("ID를 입력하세요");
    } else if (type === 1) {
      setPWPlaceholder("비밀번호를 입력하세요");
    }
    // 포커스 아웃 시 placeholder 복원
  };

  return (
    <Container>
      <PopUpContainer>
        <PopUpTitle>로그인</PopUpTitle>
        <InputContainer>
          <InputAndTextContainer>
            <PopUpInputText>ID : </PopUpInputText>
            <PopUpInputID
              type="text"
              placeholder={idPlaceholder}
              onFocus={() => handleFocus(0)}
              onBlur={() => handleBlur(0)}
            />
          </InputAndTextContainer>
          <InputAndTextContainer>
            <PopUpInputText>PW : </PopUpInputText>
            <PopUpInputPW
              type="text"
              placeholder={pwPlaceholder}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            />
          </InputAndTextContainer>
        </InputContainer>
      </PopUpContainer>
    </Container>
  );
}

export default LoginPopUp;
