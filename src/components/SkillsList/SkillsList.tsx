import { COLORS } from '@/constants/Colors';
import * as React from 'react';
import styled from 'styled-components';

type SkillsListProps = {
  skills: string[];
};

function SkillsList({ skills }: SkillsListProps) {
  return (
    <Wrapper>
      {skills.map((skill) => (
        <Skill key={skill}>
          <LeadingSpace>&nbsp;</LeadingSpace>
          {skill}
          <TrailingSpace>&nbsp;</TrailingSpace>
        </Skill>
      ))}
    </Wrapper>
  );
}

const LeadingSpace = styled.span``;

const TrailingSpace = styled.span``;

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const Skill = styled.li`
  color: ${COLORS.Tertiary64};
  font-size: ${13 / 16}rem;
  font-weight: 700;

  &:first-of-type ${LeadingSpace} {
    display: none;
  }

  &:last-of-type ${TrailingSpace} {
    display: none;
  }

  :not(&:last-of-type)&::after {
    display: inline;
    content: '/';
    font-weight: 700;
    color: ${COLORS.Tertiary64};
  }
`;

export default SkillsList;
