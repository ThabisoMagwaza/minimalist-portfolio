'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { QUERIES } from '@/constants/Queries';
import { Properties } from '@/constants/Properties';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import SecondaryButton from '../SecondaryButton';

function AboutSection() {
  return (
    <Section as="section" id="about-me">
      <MobilePicture>
        <source srcSet="/images/homepage/mobile/image-homepage-profile.jpg, /images/homepage/mobile/image-homepage-profile@2x.jpg" />
        <Image
          src="/images/homepage/mobile/image-homepage-profile.jpg"
          width={311}
          height={346}
          alt="A portrait of Alex in a suit"
        />
      </MobilePicture>
      <TabletPicture>
        <source srcSet="/images/homepage/tablet/image-homepage-profile.jpg, /images/homepage/tablet/image-homepage-profile@2x.jpg" />
        <TabletImage
          src="/images/homepage/tablet/image-homepage-profile.jpg"
          width={688}
          height={600}
          alt="A portrait of Alex in a suit"
        />
      </TabletPicture>
      <Content>
        <Heading2>About Me</Heading2>
        <Paragraph>
          I&apos;m a junior front-end developer looking for a new role in an
          exciting company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I&apos;m based in London, UK, but I&apos;m happy working remotely and
          have experience in remote teams. When I&apos;m not coding, you&apos;ll
          find me outdoors. I love being out in nature whether that&apos;s going
          for a walk, run or cycling. I&apos;d love you to check out my work.
        </Paragraph>

        <SecondaryButton href="/portfolio">Go to portfolio</SecondaryButton>
      </Content>
    </Section>
  );
}

const TabletImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const MobilePicture = styled.picture`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const TabletPicture = styled.picture`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: block;
    align-self: flex-start;
    flex: 1;
    flex-shrink: 100;
  }
`;

const Section = styled(MaxWidthWrapper)`
  margin-top: 96px;
  margin-bottom: 115px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 68px;
    margin-bottom: 96px;
  }
`;

const Content = styled.div`
  padding-top: 32px;
  padding-bottom: 51px;
  border-top: ${Properties.BorderLight};
  border-bottom: ${Properties.BorderLight};

  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 50px;
    padding-bottom: 46px;
  }
`;

const Paragraph = styled.p`
  margin-top: 28px;
  margin-bottom: 24px;
`;

export default AboutSection;
