'use client';
import * as React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  children: React.ReactNode;
};

function Heading3({ children }: HeadingProps) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h3`
  line-height: 1.05;
  font-size: ${32 / 16}rem;
  font-family: 'Ibarra Real Nova', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export default Heading3;
