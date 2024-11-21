import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const IntroduceContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.white};
  margin-bottom: 2rem;
`;

export const Line = styled.hr`
  width: 4rem;
  margin: 0 auto;
  text-align: center;
  background: ${theme.colors.secondary};
  height: 3px;
  border: none;
  border-radius: 20px;
`;

export const IntroduceText = styled.p`
  margin-top: 2rem;
  color: ${theme.colors.white};
`;
