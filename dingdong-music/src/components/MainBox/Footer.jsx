import {
  CompanyInfo,
  CompanyInfoText,
  Container,
  Copyright,
  FooterLinks,
  FooterMenuBox,
  FooterMenuItem,
  FooterSocialButton,
  FooterSocialMenu,
} from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <FooterLinks>
        <FooterMenuBox>
          <FooterMenuItem>
            <h3>회사</h3>
            <ul>
              <li>상세정보</li>
              <li>채용 정보</li>
              <li>For the Record</li>
            </ul>
          </FooterMenuItem>
          <FooterMenuItem>
            <h3>커뮤니티</h3>
            <ul>
              <li>아티스트</li>
              <li>개발자</li>
              <li>투자자</li>
              <li>공급업체</li>
            </ul>
          </FooterMenuItem>
          <FooterMenuItem>
            <h3>유용한 링크</h3>
            <ul>
              <li>지원</li>
            </ul>
          </FooterMenuItem>
          <FooterMenuItem>
            <h3>DingDong 요금제</h3>
            <ul>
              <li>Premium 개인</li>
              <li>Premium 듀오</li>
            </ul>
          </FooterMenuItem>
        </FooterMenuBox>
        <FooterSocialMenu>
          <FooterSocialButton>
            <img src="/images/insta-icon.svg" alt="facebook" />
          </FooterSocialButton>
          <FooterSocialButton>
            <img src="/images/twitter-icon.svg" alt="facebook" />
          </FooterSocialButton>
          <FooterSocialButton>
            <img src="/images/facebook-icon.svg" alt="facebook" />
          </FooterSocialButton>
        </FooterSocialMenu>
      </FooterLinks>
      <CompanyInfo>
        <Copyright>© 2024 DingDongMusic</Copyright>
        <CompanyInfoText>
          딩동 뮤직, 189, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of
          Korea | 대표: yeon-dong | 사업자등록번호: 123456-7890 (대한민국) |
          통신판매업 신고번호: 2024-공정-0007 (사업자정보) | 고객지원문의 +82
          1234 5678 및 support@dingdong.com | 호스팅서비스제공자: Google LLC
        </CompanyInfoText>
      </CompanyInfo>
    </Container>
  );
};

export default Footer;
