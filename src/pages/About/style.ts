import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div``;

export const Title = styled.h1`
  margin-top: 10rem;
  margin-bottom: 3rem;
  font-size: 5rem;
  color: ${theme.colors.highlight};
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-left: 8rem;
  margin-right: 8rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  height: 6rem;
  margin: 16px 0;

  /* 반응형 디자인 */
  @media (max-width: 1024px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.black};
  margin-bottom: 8px;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;
