'use client';
import * as React from 'react';
import styled from 'styled-components';
import { ibarra } from '@/lib/fonts';

type HeadingProps = {
  children: React.ReactNode;
};

function Heading2({ children }: HeadingProps) {
  return <Heading className={ibarra.className}>{children}</Heading>;
}

const Heading = styled.h2`
  line-height: 1.05;
  font-size: ${40 / 16}rem;
  font-family: 'Ibarra Real Nova', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
`;

export default Heading2;
