import styled from "styled-components";
import { theme } from "./../../styles/theme";

export const Container = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`;

export const TitleContainer = styled.div`
  position: relative;
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.background};
  z-index: 1;
`;

export const AddTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -55%);
  color: transparent;
  -webkit-text-stroke: 2px ${theme.colors.highlight};
  z-index: 2;
`;

export const CardContainer = styled.div`
  top: 0;
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;
  justify-content: space-around;
`;
