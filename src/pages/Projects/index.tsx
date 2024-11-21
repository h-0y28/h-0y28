import ProjectCard from "./../../components/ProjectCard/index";
import * as S from "./style";
import * as T from "../style";

export default function Projects() {
  const projects = [
    {
      skills: ["React", "TypeScript", "Tailwind CSS"],
      title: "Project 1",
      content: "This is the first project description.",
      href: "https://example1.com",
    },
    {
      skills: ["Next.js", "Chakra UI", "GraphQL"],
      title: "Project 2",
      content: "This is the second project description.",
      href: "https://example2.com",
    },
    {
      skills: ["Vue", "Vuetify", "Firebase"],
      title: "Project 3",
      content: "This is the third project description.",
      href: "https://example3.com",
    },
  ];

  return (
    <T.Container>
      <S.Title>Projects</S.Title>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          skills={project.skills}
          title={project.title}
          content={project.content}
          href={project.href}
        />
      ))}
    </T.Container>
  );
}
