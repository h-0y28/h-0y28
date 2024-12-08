import styled from "styled-components";
import theme from "../styles/theme";

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

  &:nth-of-type(1) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
    * {
      position: relative;
      z-index: 1;
    }
  }
`;

export const ColorPage = styled.div`
  background-color: ${theme.colors.dun};
`;
