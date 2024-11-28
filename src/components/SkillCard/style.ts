import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 150px;
  padding: 1rem;
  background-color: ${theme.colors.backgroundLight};
  border: 1px solid ${theme.colors.highlight};
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
`;
