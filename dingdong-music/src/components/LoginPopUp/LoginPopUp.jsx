import { useState } from "react";
import React from "react";
import {
  CloseBtn,
  Container,
  InputAndTextContainer,
  InputContainer,
  LoginBtn,
  PopUpContainer,
  PopUpInputID,
  PopUpInputPW,
  PopUpInputText,
  PopUpTitle,
} from "./LoginPopUp.style";

function LoginPopUp({ popupClose, login }) {
  const [idPlaceholder, setIDPlaceholder] = useState("ID를 입력하세요");
  const [pwPlaceholder, setPWPlaceholder] = useState("비밀번호를 입력하세요");
  const [id, setID] = useState(""); // ID 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태

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
  };

  const handleIDChange = (e) => {
    setID(e.target.value); // ID 입력값 업데이트
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // 비밀번호 입력값 업데이트
  };

  const setInputEmpty = () => {
    setID("");
    setPassword(""); // 비밀번호 입력값 업데이트
  };

  const handleLogin = () => {
    // 로그인 로직 (예: ID와 비밀번호가 모두 입력되었는지 확인)
    if (id == "" && password == "") {
      alert("ID와 비밀번호를 입력하세요.");
    } else if (id == "") {
      alert("ID를 입력하세요.");
    } else if (password == "") {
      alert("비밀번호를 입력하세요.");
    } else if (id != "string" && password != "string") {
      alert("ID 또는 비밀번호가 틀렸습니다.");
      setInputEmpty();
    } else {
      alert("로그인 되었습니다.");
      popupClose();
      login();
    }
  };

  return (
    <Container>
      <PopUpContainer>
        <CloseBtn src="/images/X_button.svg" onClick={() => popupClose()} />
        <PopUpTitle>로그인</PopUpTitle>
        <InputContainer>
          <InputAndTextContainer>
            <PopUpInputText>ID : </PopUpInputText>
            <PopUpInputID
              type="text"
              placeholder={idPlaceholder}
              onFocus={() => handleFocus(0)}
              onBlur={() => handleBlur(0)}
              value={id} // ID 상태 연결
              onChange={handleIDChange} // ID 입력 핸들러 연결
            />
          </InputAndTextContainer>
          <InputAndTextContainer>
            <PopUpInputText>PW : </PopUpInputText>
            <PopUpInputPW
              type="password" // 비밀번호 입력 시 보안을 위해 type을 password로 변경
              placeholder={pwPlaceholder}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
              value={password} // 비밀번호 상태 연결
              onChange={handlePasswordChange} // 비밀번호 입력 핸들러 연결
            />
          </InputAndTextContainer>
        </InputContainer>
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      </PopUpContainer>
    </Container>
  );
}

export default LoginPopUp;
