import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  RedirectText,
  SubText,
  TextContainer,
  TitleText,
} from "./PaymentPage.style";

function PaymentPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true); // 색상 변경 시작
      setSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });

      // 0.9초 후에 색상 변경 상태를 초기화
      setTimeout(() => {
        setIsChanging(false);
      }, 900);
    }, 1100);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Container>
      <TextContainer>
        <TitleText>앨범이 결제 되었습니다.</TitleText>
        <SubText>딩동뮤직을 이용해주셔서 감사합니다.</SubText>
        <RedirectText className={isChanging ? "changing" : ""}>
          {seconds}초 뒤 메인 화면으로 리다이렉트 됩니다.
        </RedirectText>
      </TextContainer>
    </Container>
  );
}

export default PaymentPage;
