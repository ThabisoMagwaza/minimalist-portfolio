'use client';
import * as React from 'react';
import styled from 'styled-components';
import { type Project, PROJECTS } from '@/lib/data';
import ProjectPreview from '../ProjectPreview';

function ProjectPreviews() {
  return (
    <Wrapper>
      {PROJECTS.map((project) => (
        <ProjectPreview key={project.slug} project={project} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export default ProjectPreviews;
