import styled from "styled-components";
import { theme } from "./../../styles/theme";

export const Title = styled.div`
  color: ${theme.colors.primary};
  -webkit-text-stroke: 0.1px ${theme.colors.background};
  text-align: center;
  font-size: 6rem;
  padding-top: 5.5rem;
  font-weight: bold;
`;

export const AddTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -55%);
  color: transparent;
  color: ${theme.colors.secondary};
  z-index: 2;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 7rem;
  position: relative;
`;
