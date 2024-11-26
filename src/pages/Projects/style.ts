import styled from "styled-components";
import { theme } from "./../../styles/theme";

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
  color: ${theme.colors.highlight};
  z-index: 2;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 5rem;
  position: relative;
`;
