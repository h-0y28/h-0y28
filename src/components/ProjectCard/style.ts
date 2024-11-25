import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: ${theme.colors.background};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Term = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.black};
  font-weight: bold;
`;

export const IntroduceContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const GithubImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
`;

export const WebsiteImg = styled.img`
  width: 2rem;
  height: 2rem;
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
