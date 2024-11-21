import styled from "styled-components";

export const Section = styled.section<{ bgColor?: string; bgImg?: string }>`
  height: 100vh;
  background-color: ${(props) =>
    props.bgImg ? "transparent" : props.bgColor || "transparent"};
  background-image: ${(props) =>
    props.bgImg ? `url(${props.bgImg})` : "none"};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`;
