'use client';
import * as React from 'react';
import styled from 'styled-components';
import { ibarra } from '@/lib/fonts';

type HeadingProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'h2'>;

function Heading2({ children, ...delegated }: HeadingProps) {
  return (
    <Heading className={ibarra.className} {...delegated}>
      {children}
    </Heading>
  );
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
