import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  width: 18rem;
  height: 9rem;
  margin: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.black};
  margin-bottom: 8px;
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;
