import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Heading1 from '@/components/Heading1';
import PrimaryButton from '@/components/PrimaryButton';

function Header() {
  return (
    <MaxWidthWrapper as="header">
      <Picture>
        <source srcSet="/images/homepage/mobile/image-homepage-hero.jpg, /images/homepage/mobile/image-homepage-hero@2x.jpg 2x" />
        <Image
          src="/images/homepage/mobile/image-homepage-hero.jpg"
          alt="An desktop mockup showng an example project on screen"
          width={311}
          height={271}
          priority
        />
      </Picture>

      <Hero>
        <Heading1>
          Hey, I&apos;m Alex Spencer and I love building beautiful websites
        </Heading1>

        <PrimaryButton href="#about-me">About Me</PrimaryButton>
      </Hero>
    </MaxWidthWrapper>
  );
}

const Picture = styled.picture`
  margin-bottom: 24px;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default Header;
