import styled from "styled-components";

interface SectionProps {
  bgImg?: string;
  bgBorder?: string;
}

export const Section = styled.section<SectionProps>`
  position: relative;
  padding: 4rem 2rem;
  ${({ bgImg }) =>
    bgImg &&
    `
      background-image: url(${bgImg});
      background-size: cover;
      background-position: center;
    `}
  ${({ bgBorder }) =>
    bgBorder &&
    `
      border-top: 2px solid ${bgBorder};
      border-bottom: 2px solid ${bgBorder};
      margin: 0 auto;
      margin-bottom: 10rem;
    `}

  &:nth-of-type(1) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
      z-index: 0;
    }
    * {
      position: relative;
      z-index: 1;
    }
  }
`;
