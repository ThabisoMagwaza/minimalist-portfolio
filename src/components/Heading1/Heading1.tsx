'use client';
import * as React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  children: React.ReactNode;
};

function Heading1({ children }: HeadingProps) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  line-height: 1.05;
  font-size: ${40 / 16}rem;
  font-family: 'Ibarra Real Nova', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
`;

export default Heading1;
