'use client';
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '@/constants/Colors';

type SecondaryButtonProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentPropsWithRef<'a'>;

function SecondaryButton({
  children,
  href,
  ...delegated
}: SecondaryButtonProps) {
  return (
    <Wrapper href={href} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.Primary22};
  border: 1px solid ${COLORS.Primary22};

  font-size: ${12 / 16}rem;
  letter-spacing: 2px;
  display: inline-block;

  padding: 1rem ${32 / 16}rem;
`;

export default SecondaryButton;
