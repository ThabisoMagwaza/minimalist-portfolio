'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UnstyledButton from '../UnstyledButton';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import MobileNav from '../MobileNav';

function NavBar() {
  return (
    <NavWrapper>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Portfolio Logo"
          width={61}
          height={32}
        />
      </Link>

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
