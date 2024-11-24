import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.highlight};
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 0;
  width: 15rem;
  height: 4.5rem;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transition: border-color 0.5s ease;
  cursor: pointer;
  &:hover {
    border-bottom: 1.5px solid ${theme.colors.black};
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.8rem;
  color: ${theme.colors.black};
  margin-bottom: 4px;
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-size: 0.5rem;
  color: #666;
  line-height: 1.3;
`;

export const Image = styled.img`
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  margin-right: 12px;
`;
