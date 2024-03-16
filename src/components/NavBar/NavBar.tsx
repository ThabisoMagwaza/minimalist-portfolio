'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UnstyledButton from '../UnstyledButton';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import MobileNav from '../MobileNav';
import Logo from '../Logo';
import { COLORS } from '@/constants/Colors';

function NavBar() {
  return (
    <NavWrapper>
      <LogoLink href="/">
        <Logo />
      </LogoLink>

      <MobileNav>
        <OpenMenuBtn>
          <Image
            src="/images/icons/hamburger.svg"
            width={24}
            height={13}
            alt=""
          />
        </OpenMenuBtn>
      </MobileNav>
    </NavWrapper>
  );
}

const LogoLink = styled(Link)`
  color: ${COLORS.Primary22};
`;

const OpenMenuBtn = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  &[data-state='open'] {
    display: none;
  }
`;

const NavWrapper = styled(MaxWidthWrapper)`
  padding-top: 32px;
  padding-bottom: 40px;

  display: flex;
  justify-content: space-between;
`;

export default NavBar;
