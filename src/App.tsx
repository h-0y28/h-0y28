import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Skills";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const Section = styled.section<{ bgColor: string }>`
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Section id="home" bgColor="#cce7ff">
          <Home />
        </Section>
        <Section id="about" bgColor="#cce7ff">
          <About />
        </Section>
        <Section id="skills" bgColor="#d4edda">
          <Skills />
        </Section>
        <Section id="projects" bgColor="#fff3cd">
          <Projects />
        </Section>
        <Section id="contact" bgColor="#f8d7da">
          <Contact />
        </Section>
      </main>
    </div>
  );
};

export default App;
