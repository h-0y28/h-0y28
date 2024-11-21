import React from "react";
import * as S from "./style";

const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤
    }
  };

  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.NavButton onClick={() => handleScroll("home")}>Home</S.NavButton>
        <S.NavButton onClick={() => handleScroll("about")}>About</S.NavButton>
        <S.NavButton onClick={() => handleScroll("skills")}>Skills</S.NavButton>
        <S.NavButton onClick={() => handleScroll("projects")}>
          Projects
        </S.NavButton>
        <S.NavButton onClick={() => handleScroll("contact")}>
          Contact
        </S.NavButton>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
