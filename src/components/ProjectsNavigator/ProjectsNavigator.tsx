'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Properties } from '@/constants/Properties';
import { COLORS } from '@/constants/Colors';

type NavItem = {
  slug: string;
  name: string;
};

type ProjectsNavigatorProps = {
  previous: NavItem;
  next: NavItem;
};

function ProjectsNavigator({ previous, next }: ProjectsNavigatorProps) {
  return (
    <Wrapper>
      <PreviousProjectLink href={`/portfolio/${previous.slug}`}>
        <Image
          src="/images/icons/arrow-left.svg"
          width={10}
          height={16}
          alt=""
        />
        <div>
          <Name>{previous.name}</Name>
          <Label>Previous Project</Label>
        </div>
      </PreviousProjectLink>
      <NextProjectLink href={`/portfolio/${next.slug}`}>
        <Image
          src="/images/icons/arrow-right.svg"
          width={10}
          height={16}
          alt=""
        />

        <div>
          <Name>{next.name}</Name>
          <Label>Next Project</Label>
        </div>
      </NextProjectLink>
    </Wrapper>
  );
}

const Name = styled.p`
  line-height: 1.05;
  font-size: ${32 / 16}rem;
  font-family: 'Ibarra Real Nova', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Label = styled.p`
  color: ${COLORS.Primary22op50};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 16px;

  padding: 24px 0;
`;

const PreviousProjectLink = styled(NavLink)`
  border-right: ${Properties.BorderLight};
`;

const NextProjectLink = styled(NavLink)`
  align-items: flex-end;
  text-align: end;
`;

const Wrapper = styled.nav`
  display: flex;
  border-top: ${Properties.BorderLight};
  border-bottom: ${Properties.BorderLight};
`;

export default ProjectsNavigator;
