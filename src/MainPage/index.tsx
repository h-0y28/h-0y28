import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Projects";
import Projects from "../pages/Skills";
import Contact from "../pages/Contact";
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
        <S.Section id="about" bgColor={theme.colors.background}>
          <About />
        </S.Section>
        <S.Section id="skills" bgColor={theme.colors.accent}>
          <Skills />
        </S.Section>
        <S.Section id="projects" bgColor={theme.colors.background}>
          <Projects />
        </S.Section>
        <S.Section id="contact" bgColor={theme.colors.secondary}>
          <Contact />
        </S.Section>
      </main>
    </div>
  );
};
