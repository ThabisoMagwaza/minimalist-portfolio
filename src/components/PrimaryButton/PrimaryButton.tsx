'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/constants/Colors';

type PrimaryButtonProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentPropsWithoutRef<'a'>;

function PrimaryButton({ children, href, ...delegated }: PrimaryButtonProps) {
  return (
    <Wrapper href={href}>
      <IconWrapper>
        <Image
          src="/images/icons/down-arrows.svg"
          width={16}
          height={14}
          alt=""
        />
      </IconWrapper>
      <TextWrapper>{children}</TextWrapper>
    </Wrapper>
  );
}

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  color: ${COLORS.White};
  width: 200px;
  height: 48px;

  background: ${COLORS.Secondary21};
  font-family: 'Public Sans', sans-serif;

  display: flex;
`;

const IconWrapper = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.Secondary18};
`;

export default PrimaryButton;
