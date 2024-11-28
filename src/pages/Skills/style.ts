import styled from "styled-components";
import { theme } from "./../../styles/theme";

export const Title = styled.div`
  color: ${theme.colors.background};
  text-align: center;
  font-size: 7rem;
  padding-top: 5.5rem;
  font-weight: bold;
  /* z-index: 1; */
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
