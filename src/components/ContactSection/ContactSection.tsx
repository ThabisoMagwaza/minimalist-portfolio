'use client';
import * as React from 'react';
import styled from 'styled-components';

import { QUERIES } from '@/constants/Queries';
import { Properties } from '@/constants/Properties';

import Heading2 from '../Heading2';
import SecondaryButton from '../SecondaryButton';
import MaxWidthWrapper from '../MaxWidthWrapper';

function ContactSection() {
  return (
    <Wrapper as="section">
      <Heading>Interested in doing a project together?</Heading>
      <Ruler />
      <SecondaryButton href="/contact">Contact Me</SecondaryButton>
    </Wrapper>
  );
}

const Ruler = styled.hr`
  display: none;
  border: ${Properties.BorderLight};
  flex: 1;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const Wrapper = styled(MaxWidthWrapper)`
  margin-bottom: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    margin-bottom: 96px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-bottom: 150px;
  }
`;

const Heading = styled(Heading2)`
  @media ${QUERIES.tabletAndUp} {
    max-width: 350px;
  }
`;

export default ContactSection;
