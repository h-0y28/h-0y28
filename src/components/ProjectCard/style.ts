import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.a<{ "data-position"?: string }>`
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
  width: 60%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: ${theme.colors.background};
  align-self: ${({ "data-position": position }) =>
    position === "left" ? "flex-start" : "flex-end"};

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  transform: translateY(-65%);
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.highlight};
  transform: translateY(-10%);
  background-color: ${theme.colors.background};
  padding: 10px;
  border: 1px solid ${theme.colors.highlight};
  border-radius: 14px;
`;

export const InconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateY(-15%);
`;

export const GithubImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const WebsiteImg = styled.img`
  width: 4.6rem;
  height: 4.6rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
`;

export const Stack = styled.div`
  padding: 4px 8px;
  background-color: ${theme.colors.highlight};
  color: ${theme.colors.background};
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Term = styled.h3`
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
