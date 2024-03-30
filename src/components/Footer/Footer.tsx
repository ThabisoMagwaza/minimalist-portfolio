'use client';
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/constants/Colors';
import { QUERIES } from '@/constants/Queries';

import Logo from '../Logo';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Github from '../Github';
import Twitter from '../Twitter';
import LinkedIn from '../LinkedIn';

function Footer() {
  return (
    <OuterWrapper>
      <Wrapper>
        <LogoLink href="/">
          <Logo />
        </LogoLink>

        <nav>
          <NavList>
            <ListItem>
              <NavLink href="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </ListItem>
            <ListItem>
              <NavLink href="/contact">Contact Me</NavLink>
            </ListItem>
          </NavList>
        </nav>

        <SocialLinks>
          <ListItem>
            <SocialLink href="/">
              <Github />
            </SocialLink>
          </ListItem>
          <ListItem>
            <SocialLink href="/">
              <Twitter />
            </SocialLink>
          </ListItem>
          <ListItem>
            <SocialLink href="/">
              <LinkedIn />
            </SocialLink>
          </ListItem>
        </SocialLinks>
      </Wrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled.footer`
  background: ${COLORS.Primary22};
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0;

  @media ${QUERIES.tabletAndUp} {
    margin-left: auto;
    gap: 16px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  font-size: ${12 / 16}rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const ListItem = styled.li``;

const LogoLink = styled(Link)`
  color: ${COLORS.White};
`;

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 56px;
  padding-bottom: 56px;
  color: ${COLORS.White};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 48px;
  }
`;

export default Footer;
