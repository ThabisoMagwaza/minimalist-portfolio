'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { QUERIES } from '@/constants/Queries';
import { Properties } from '@/constants/Properties';
import { PROJECTS } from '@/lib/data';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Heading2 from '@/components/Heading2';
import Heading3 from '@/components/Heading3';
import SkillsList from '@/components/SkillsList';
import SecondaryButton from '@/components/SecondaryButton';
import ProjectsNavigator from '@/components/ProjectsNavigator';
import ContactSection from '@/components/ContactSection';

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((project) => project.slug === slug)!;

  const index = PROJECTS.findIndex((project) => project.slug === slug)!;

  const nextPoject = PROJECTS[(index + 1) % PROJECTS.length];

  const previousProject = PROJECTS.at(index - 1)!;

  return (
    <main>
      <PageWrapper>
        <header>
          <MobileHeroPicture>
            <source srcSet={project.heroImg.mobile.srcSet} />
            <DetailImage
              src={project.heroImg.mobile.srcSet}
              width={311}
              height={140}
              alt={`A screenshot of the ${project.name} project`}
            />
          </MobileHeroPicture>

          <TabletHeroPicture>
            <source srcSet={project.heroImg.tablet.srcSet} />
            <DetailImage
              src={project.heroImg.tablet.src}
              width={689}
              height={310}
              alt={`A screenshot of the ${project.name} project`}
            />
          </TabletHeroPicture>

          <HeroContent>
            <LeftWrapper>
              <Heading2>{project.name}</Heading2>

              <MobileDescription>{project.description}</MobileDescription>

              <div>
                <SkillsList skills={project.skills} />
                <SkillsList skills={project.techStack} />
              </div>

              <SecondaryButton
                href={project.website}
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Visit Website
              </SecondaryButton>
            </LeftWrapper>
            <TabletDescription>{project.description}</TabletDescription>
          </HeroContent>
        </header>

        <Background>
          <Heading3>Project Background</Heading3>

          <p>{project.background}</p>
        </Background>

        <Preview>
          <Heading3>Static Previews</Heading3>

          <PreviewImages>
            {project.previews.map((previvew) => (
              <PreviewPicture key={previvew.mobile.src}>
                <source srcSet={previvew.mobile.srcSet} />
                <PreviewImage
                  src={previvew.mobile.src}
                  width={689}
                  height={434}
                  alt={`A preview image of the ${project.name} project`}
                />
              </PreviewPicture>
            ))}
          </PreviewImages>
        </Preview>

        <ProjectsNavigator
          previous={{
            slug: previousProject.slug,
            name: previousProject.name,
          }}
          next={{
            slug: nextPoject.slug,
            name: nextPoject.name,
          }}
        />
      </PageWrapper>
      <ContactSection />
    </main>
  );
}

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1;
`;

const TabletDescription = styled.p`
  display: none;
  flex: 1;

  @media ${QUERIES.tabletAndUp} {
    display: block;
  }
`;

const MobileDescription = styled.p`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const PageWrapper = styled(MaxWidthWrapper)`
  margin-bottom: 64px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 54px;
    margin-bottom: 80px;
  }
`;

const PreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const PreviewPicture = styled.picture`
  height: 197px;

  @media ${QUERIES.tabletAndUp} {
    height: 434px;
  }
`;

const PreviewImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Preview = styled.section`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 80px;
  }
`;

const Background = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-bottom: 40px;
`;

const HeroContent = styled.div`
  padding-bottom: 24px;
  margin-bottom: 48px;

  border-bottom: ${Properties.BorderLight};

  @media ${QUERIES.tabletAndUp} {
    padding-top: 32px;
    padding-bottom: 32px;

    border-top: ${Properties.BorderLight};

    display: flex;
    gap: 12px;
  }
`;

const MobileHeroPicture = styled.picture`
  height: 140px;
  margin-bottom: 40px;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const TabletHeroPicture = styled.picture`
  height: 310px;
  margin-bottom: 40px;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: block;
  }
`;

const DetailImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
