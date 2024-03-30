'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { QUERIES } from '@/constants/Queries';

import { type Project } from '@/lib/data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import SecondaryButton from '../SecondaryButton';
import { Properties } from '@/constants/Properties';

type ProjectPreviewProps = {
  project: Project;
  reverse: boolean;
};

function ProjectPreview({ project, reverse }: ProjectPreviewProps) {
  const name = project.name;
  const slug = project.slug;

  return (
    <Wrapper as="article" $reverse={reverse}>
      <MobilePicture>
        <source srcSet={project.portfolioImg.mobile.srcSet} />
        <PreviewImage
          src={project.portfolioImg.mobile.src}
          alt={`A static preview of the ${name} project.`}
          width={311}
          height={288}
        />
      </MobilePicture>

      <TabletPicture>
        <source srcSet={project.portfolioImg.tablet.srcSet} />
        <PreviewImage
          src={project.portfolioImg.tablet.src}
          alt={`A static preview of the ${name} project.`}
          width={339}
          height={314}
        />
      </TabletPicture>

      <Content>
        <Heading2>{name}</Heading2>
        <p>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <SecondaryButton href={`/portfolio/${slug}`}>
          View Project
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

  flex: 1;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
    padding-bottom: 50px;
  }
`;

const TabletPicture = styled.picture`
  display: none;
  width: 339px;
  height: 314px;
  flex: 1.15;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const MobilePicture = styled.picture`
  width: 100%;
  height: 288px;
  padding-bottom: 32px;

  flex: 1;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const PreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(MaxWidthWrapper)<{
  readonly $reverse: boolean;
}>`
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.$reverse && 'row-reverse') || 'row'};
    gap: 69px;
  }
`;

export default ProjectPreview;
