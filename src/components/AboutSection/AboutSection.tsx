'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading2 from '../Heading2';
import { Properties } from '@/constants/Properties';
import SecondaryButton from '../SecondaryButton';

function AboutSection() {
  return (
    <Section as="section" id="about-me">
      <picture>
        <source srcSet="/images/homepage/mobile/image-homepage-profile.jpg, /images/homepage/mobile/image-homepage-profile@2x.jpg" />
        <Image
          src="/images/homepage/mobile/image-homepage-profile.jpg"
          width={311}
          height={346}
          alt="A portrait of Alex in a suit"
        />
      </picture>
      <Context>
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

        <SecondaryButton href="/portfolio-index">
          Go to portfolio
        </SecondaryButton>
      </Context>
    </Section>
  );
}

const Section = styled(MaxWidthWrapper)`
  margin-top: 96px;
  margin-bottom: 115px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Context = styled.div`
  padding-top: 32px;
  padding-bottom: 51px;
  border-top: ${Properties.BorderLight};
  border-bottom: ${Properties.BorderLight};
`;

const Paragraph = styled.p`
  line-height: 2;
  margin-top: 28px;
  margin-bottom: 24px;
`;

export default AboutSection;
