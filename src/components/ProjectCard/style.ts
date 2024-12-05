import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.a<{ "data-position"?: string }>`
  border: 1px solid ${theme.colors.highlight};
  border-radius: 12px;
  padding: 20px;
  padding-bottom: 0;
  width: 60%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: ${theme.colors.background};
  align-self: ${({ "data-position": position }) =>
    position === "left" ? "flex-start" : "flex-end"};
  text-decoration: none;

  /* &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  } */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-65%);
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.highlight};
  transform: translateY(-10%);
  background-color: ${theme.colors.background};
  padding: 10px;
  border: 1px solid ${theme.colors.highlight};
  border-radius: 14px;
  background-color: ${theme.colors.background};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateY(-15%);
`;

export const IconImg = styled.img<{ isGitHub?: boolean }>`
  width: ${({ isGitHub }) => (isGitHub ? "4rem" : "4.5rem")};
  height: ${({ isGitHub }) => (isGitHub ? "4rem" : "4.5rem")};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transform: translateY(-25%);
`;

export const Term = styled.h3`
  font-size: 1rem;
  color: ${theme.colors.black};
  font-weight: bold;
  margin-left: 5px;
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Stack = styled.span`
  padding: 4px 8px;
  background-color: ${theme.colors.highlight};
  color: ${theme.colors.background};
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: black;
  line-height: 1.5;
  background-color: ${theme.colors.background};
  transition: max-height 0.5s ease, padding 0.5s ease;
  width: 100%;
  max-height: 0; /* 초기 높이를 0으로 설정 */
  overflow: hidden; /* 내용 숨기기 */
  padding: 0; /* 패딩 제거 */

  ${CardContainer}:hover & {
    /* 부모(CardContainer)가 hover 상태일 때 */
    max-height: 200px; /* 원하는 높이로 확장 */
    padding: 10px 0; /* 패딩 추가로 자연스럽게 공간 확보 */
  }
`;
