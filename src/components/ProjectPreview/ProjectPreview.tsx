'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { type Project } from '@/lib/data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import SecondaryButton from '../SecondaryButton';
import { Properties } from '@/constants/Properties';

type ProjectPreviewProps = {
  project: Project;
};

function ProjectPreview({ project }: ProjectPreviewProps) {
  const previewImages = project.portfolioImg.mobile.srcSet;
  const previewImage = project.heroImg.mobile.src;
  const name = project.name;
  const slug = project.slug;

  return (
    <Wrapper as="article">
      <Picture>
        <source srcSet={previewImages} />
        <PreviewImage
          src={previewImage}
          alt={`A static preview of the ${name} project.`}
          width={311}
          height={288}
        />
      </Picture>

      <Content>
        <Heading2>{name}</Heading2>
        <p>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <SecondaryButton href={`/portfolio/${slug}`}>
          View Website
        </SecondaryButton>
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-top: ${Properties.BorderLight};
  border-bottom: ${Properties.BorderLight};
`;

const Picture = styled.picture`
  width: 100%;
  padding-bottom: 32px;
`;

const PreviewImage = styled(Image)`
  width: 100%;
`;

const Wrapper = styled(MaxWidthWrapper)`
  /* &:last-of-type ${Content} {
    border-bottom: ${Properties.BorderLight};
  } */
`;

export default ProjectPreview;
