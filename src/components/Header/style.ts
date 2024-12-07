import styled from "styled-components";
import theme from "../../styles/theme";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const NavButton = styled.button`
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: ${theme.colors.black};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;
