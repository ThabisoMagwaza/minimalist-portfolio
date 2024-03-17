'use client';
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/constants/Colors';

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'a'>;

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
} & React.ComponentPropsWithRef<'button'>;

function isLinkButton(
  props: LinkButtonProps | ButtonProps
): props is LinkButtonProps {
  return 'href' in props;
}

function PrimaryButton(props: LinkButtonProps | ButtonProps) {
  if (isLinkButton(props)) {
    return (
      <LinkWrapper {...props}>
        {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
        <TextWrapper>{props.children}</TextWrapper>
      </LinkWrapper>
    );
  }

  return (
    <ButtonWrapper {...props}>
      {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
      <TextWrapper>{props.children}</TextWrapper>
    </ButtonWrapper>
  );
}

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  color: ${COLORS.White};
  width: 200px;
  height: 48px;

  background: ${COLORS.Secondary21};

  display: flex;
`;

const ButtonWrapper = styled.button`
  border: none;

  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  color: ${COLORS.White};
  width: 200px;
  height: 48px;

  background: ${COLORS.Secondary21};

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
