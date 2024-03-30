'use client';
import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/constants/Colors';
import { QUERIES } from '@/constants/Queries';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Heading1 from '@/components/Heading1';
import PrimaryButton from '@/components/PrimaryButton';

function Header() {
  return (
    <Wrapper as="header">
      <MobilePicture>
        <source srcSet="/images/homepage/mobile/image-homepage-hero.jpg, /images/homepage/mobile/image-homepage-hero@2x.jpg 2x" />
        <ImageStyled
          src="/images/homepage/mobile/image-homepage-hero.jpg"
          alt="An desktop mockup showng an example project on screen"
          width={311}
          height={271}
          priority
        />
      </MobilePicture>

      <TabletPicture>
        <source srcSet="/images/homepage/tablet/image-homepage-hero.jpg, /images/homepage/tablet/image-homepage-hero@2x.jpg 2x" />
        <ImageStyled
          src="/images/homepage/tablet/image-homepage-hero.jpg"
          alt="An desktop mockup showng an example project on screen"
          width={688}
          height={600}
          priority
        />
      </TabletPicture>

      <DesktopPicture>
        <source srcSet="/images/homepage/desktop/image-homepage-hero.jpg, /images/homepage/desktop/image-homepage-hero@2x.jpg 2x" />
        <ImageStyled
          src="/images/homepage/desktop/image-homepage-hero.jpg"
          alt="An desktop mockup showng an example project on screen"
          width={1110}
          height={600}
          priority
        />
      </DesktopPicture>

      <Hero>
        <Heading1>
          Hey, I&apos;m Alex Spencer and I love building beautiful websites
        </Heading1>

        <PrimaryButton
          icon={
            <Image
              src="/images/icons/down-arrows.svg"
              width={16}
              height={14}
              alt=""
            />
          }
          href="#about-me"
        >
          About Me
        </PrimaryButton>
      </Hero>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  position: relative;
  margin-top: 40px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 47px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 54px;
  }
`;

const MobilePicture = styled.picture`
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const TabletPicture = styled.picture`
  display: none;
  max-height: 600px;

  @media ${QUERIES.tabletAndUp} {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopPicture = styled.picture`
  display: none;
  max-height: 600px;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;

  @media ${QUERIES.tabletAndUp} {
    object-fit: cover;
    object-position: center left;
    height: revert-layer;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${COLORS.White};

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    bottom: 0;
    max-width: 514px;

    padding: ${56 / 16}rem ${56 / 16}rem 0 0;
    gap: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 445px;
    gap: 53px;
  }
`;

export default Header;
