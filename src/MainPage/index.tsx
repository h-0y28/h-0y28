import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import theme from "../styles/theme";
import homeImg from "../assets/homeImg.jpg";

import * as S from "./style";

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
        <S.ColorPage>
          <S.Section id="skills" bgBorder={theme.colors.primary}>
            <Skills />
          </S.Section>
        </S.ColorPage>
        <S.Section id="projects">
          <Projects />
        </S.Section>
      </main>
    </div>
  );
};
