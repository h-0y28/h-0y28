import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const NavButton = styled.button`
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavButton onClick={() => handleScroll("home")}>Home</NavButton>
        <NavButton onClick={() => handleScroll("about")}>About</NavButton>
        <NavButton onClick={() => handleScroll("skills")}>Skills</NavButton>
        <NavButton onClick={() => handleScroll("projects")}>Projects</NavButton>
        <NavButton onClick={() => handleScroll("contact")}>Contact</NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
