import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  /* gap: 10rem; */
  column-gap: 10rem;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5rem 2rem;
`;

export const Title = styled.div`
  color: ${theme.colors.background};
  /* -webkit-text-stroke: 0.5px ${theme.colors.gray}; */
  text-align: center;
  font-size: 6rem;
  padding-top: 5rem;
  font-weight: bold;
`;
