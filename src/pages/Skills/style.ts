import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5rem 2rem;
`;

export const Title = styled.div`
  color: ${theme.colors.secondary};
  /* text-shadow: 2px 2px 5px ${theme.colors.highlight}; */
  text-align: center;
  font-size: 6rem;
  padding-top: 5rem;
  font-weight: bold;
  /* margin-bottom: 2rem; */
`;
