'use client';
import * as React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { COLORS } from '@/constants/Colors';
import { QUERIES } from '@/constants/Queries';

import UnstyledButton from '../UnstyledButton';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styled from 'styled-components';
import MobileNav from '../MobileNav';
import Logo from '../Logo';

function NavBar() {
  const pathname = usePathname();

  return (
    <NavWrapper>
      <LogoLink href="/">
        <Logo />
      </LogoLink>

      <DesktopNav>
        <NavList>
          <NavListItem>
            <NavLink $active={pathname === '/'} href="/">
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink $active={pathname === '/portfolio'} href="/portfolio">
              Portfolio
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink $active={pathname === '/contact'} href="/contact">
              Contact Me
            </NavLink>
          </NavListItem>
        </NavList>
      </DesktopNav>

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

const DesktopNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const NavList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  letter-spacing: 2px;
  gap: 42px;
`;

const NavListItem = styled.li``;

const NavLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-size: ${12 / 16}rem;

  color: ${(props) => (props.$active && COLORS.AccentOne54) || 'inherit'};

  &:hover {
    color: ${COLORS.AccentOne54};
  }
`;

const LogoLink = styled(Link)`
  color: ${COLORS.Primary22};
`;

const OpenMenuBtn = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  &[data-state='open'] {
    display: none;
  }

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const NavWrapper = styled(MaxWidthWrapper)`
  padding-top: 32px;

  display: flex;
  justify-content: space-between;
`;

export default NavBar;
