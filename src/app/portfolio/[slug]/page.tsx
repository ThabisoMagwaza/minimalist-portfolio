'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { PROJECTS } from '@/lib/data';
import { Properties } from '@/constants/Properties';

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

  let previosProjectIndex = index - 1;

  if (previosProjectIndex < 0) {
    previosProjectIndex = PROJECTS.length - 1;
  }

  const previousProject = PROJECTS[previosProjectIndex];

  return (
    <main>
      <PageWrapper>
        <header>
          <HeroPicture>
            <source srcSet={project.heroImg.mobile.srcSet} />
            <DetailImage
              src={project.heroImg.mobile.srcSet}
              width={690}
              height={310}
              alt=""
            />
          </HeroPicture>

          <HeroContent>
            <Heading2>{project.name}</Heading2>

            <p>{project.description}</p>

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

const PageWrapper = styled(MaxWidthWrapper)`
  margin-bottom: 64px;
`;

const PreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const PreviewPicture = styled.picture`
  height: 197px;
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
`;

const Background = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-bottom: 40px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  padding-bottom: 24px;
  margin-bottom: 48px;
  border-bottom: ${Properties.BorderLight};
`;

const HeroPicture = styled.picture`
  height: 140px;
  margin-bottom: 40px;
`;

const DetailImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
