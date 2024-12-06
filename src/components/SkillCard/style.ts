import styled from "styled-components";
import theme from "../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  border-left: 3px solid ${theme.colors.background};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    border-left: 3px solid ${theme.colors.highlight};
    transition: 0.5s;
  }
`;

export const Category = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  font-size: 1rem;
  color: ${theme.colors.black};
  margin-bottom: 0.5rem;
`;

export const SubCategory = styled.div`
  margin-bottom: 1rem;
`;

export const SubCategoryTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

export const SubCategoryList = styled.ul`
  list-style: disc;
  margin-left: 1rem;
`;
