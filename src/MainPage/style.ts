import styled from "styled-components";

interface SectionProps {
  bgImg?: string;
  bgColor?: string;
}
export const Section = styled.section<SectionProps>`
  position: relative;

  ${({ bgImg }) =>
    bgImg &&
    `
      background-image: url(${bgImg});
      background-size: cover;
      background-position: center;
    `}

  ${({ bgColor }) =>
    bgColor &&
    `
      background-color: ${bgColor};
    `}

  /* 홈 섹션에만 배경 불투명도 적용 */
  &:nth-of-type(1) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0; /* 다른 콘텐츠보다 뒤에 표시 */
    }
    * {
      position: relative;
      z-index: 1;
    }
  }
`;
