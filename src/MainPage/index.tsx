import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import theme from "../styles/theme";
import homeImg from "../assets/homeImg.jpg";

import * as S from "./style";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

export const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <S.Section id="home" bgImg={homeImg}>
          <Home />
        </S.Section>
        <S.Section id="about">
          <About />
        </S.Section>
        <S.Section id="skills" bgColor={theme.colors.primary}>
          <Skills />
        </S.Section>
        <S.Section id="projects">
          <Projects />
        </S.Section>
      </main>
    </div>
  );
};
