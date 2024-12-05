import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  border-radius: 1.5rem; /* 더 둥글게 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem; /* 전체 크기 조정 */
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 카드 강조 */
`;

export const ContentContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.primary};
  padding: 16px; /* 패딩 추가 */
  width: 20rem; /* 더 넓게 */
  height: 6.5rem; /* 높이 증가 */
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transition: border-color 0.5s ease;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid ${theme.colors.highlight}; /* hover 시 두께 증가 */
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem; /* 제목 글꼴 크기 증가 */
  color: ${theme.colors.black};
  margin-bottom: 8px; /* 간격 조정 */
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-size: 0.9rem; /* 내용 글꼴 크기 증가 */
  color: #666;
  line-height: 1.5; /* 줄 간격 증가 */
`;

export const Image = styled.img`
  margin-left: 1.5rem;
  width: 3rem; /* 이미지 크기 증가 */
  height: 3rem; /* 이미지 크기 증가 */
  margin-right: 16px;
`;
