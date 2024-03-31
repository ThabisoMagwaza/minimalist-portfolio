'use client';
import * as React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants/Queries';

import { PROJECTS } from '@/lib/data';

import ProjectPreview from '../ProjectPreview';
import MaxWidthWrapper from '../MaxWidthWrapper';

function ProjectPreviews() {
  return (
    <Wrapper as="section">
      {PROJECTS.map((project, index) => (
        <ProjectPreview
          key={project.slug}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding-bottom: 80px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 94px;
    gap: 80px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-bottom: 150px;
  }
`;

export default ProjectPreviews;
