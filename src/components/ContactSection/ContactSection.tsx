'use client';
import * as React from 'react';
import styled from 'styled-components';
import Heading2 from '../Heading2';
import SecondaryButton from '../SecondaryButton';
import MaxWidthWrapper from '../MaxWidthWrapper';

function ContactSection() {
  return (
    <Wrapper as="section">
      <Heading2>Interested in doing a project together?</Heading2>
      <SecondaryButton href="/contact">Contact Me</SecondaryButton>
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  margin-bottom: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export default ContactSection;
