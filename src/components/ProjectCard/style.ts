import styled from "styled-components";
import theme from "../../styles/theme";

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  position: relative;
`;

export const CardContainer = styled.a`
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  width: 60%;
  background-color: ${theme.colors.background};
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${theme.colors.highlight};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
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

export const Term = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.black};
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Skill = styled.span`
  padding: 4px 8px;
  background-color: ${theme.colors.highlight};
  color: ${theme.colors.background};
  border-radius: 4px;
  font-size: 0.8rem;
`;

export const Description = styled.div`
  flex: 1;
  background-color: ${theme.colors.backgroundLight};
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  transition: opacity 0.3s ease-in-out;
`;

export const DescriptionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.highlight};
  margin-bottom: 10px;
`;

export const DescriptionContent = styled.p`
  font-size: 1rem;
  color: ${theme.colors.black};
  line-height: 1.5;
`;
