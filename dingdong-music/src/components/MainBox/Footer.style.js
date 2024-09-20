import styled from "styled-components";

export const Container = styled.div`
  padding: 0 32px;
  padding-top: 64px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--primary-color2);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FooterMenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-between;
`;

export const FooterMenuItem = styled.div`
  color: white;
  font-size: 16px;
  flex-basis: 23%;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  ul {
  }

  li {
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterSocialMenu = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 16px;
`;

export const FooterSocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: var(--primary-color3);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary-color2);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
`;

export const CompanyInfo = styled.div`
  color: var(--primary-color2);
  font-size: 12px;
`;

export const Copyright = styled.p`
  margin-bottom: 16px;
`;

export const CompanyInfoText = styled.p`
  margin-bottom: 64px;
`;
