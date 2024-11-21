import styled from "styled-components";
import theme from "../../styles/theme";

export const HomeContainer = styled.div`
  padding-top: 15rem;
  padding-bottom: 8rem;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroduceContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: ${theme.colors.white};
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Line = styled.hr`
  width: 4rem;
  margin: 0 auto;
  text-align: center;
  background: ${theme.colors.primary};
  height: 3px;
  border: none;
  border-radius: 20px;
`;

export const IntroduceText = styled.p`
  margin-top: 2rem;
  font-weight: 100;
  color: ${theme.colors.background};
  font-size: 23px;

  span {
    display: block;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 19px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
