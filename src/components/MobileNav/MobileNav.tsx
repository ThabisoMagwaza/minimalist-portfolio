import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

import { COLORS } from '@/constants/Colors';
import UnstyledButton from '../UnstyledButton';

type MobileNavProps = {
  children: React.ReactNode;
};

function MobileNav({ children }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild onClick={() => setOpen(true)}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay onClick={() => setOpen(false)} />
        <Dialog.Close asChild>
          <CloseMenuBtn onClick={() => setOpen(false)}>
            <Image
              src="/images/icons/close.svg"
              width={18}
              height={19}
              alt=""
            />
          </CloseMenuBtn>
        </Dialog.Close>
        <Content>
          <nav>
            <NavList>
              <NavListItem>
                <NavLink onClick={() => setOpen(false)} href="/">
                  Home
                </NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink onClick={() => setOpen(false)} href="/portfolio">
                  Portfolio
                </NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink onClick={() => setOpen(false)} href="/contact">
                  Contact Me
                </NavLink>
              </NavListItem>
            </NavList>
          </nav>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Overlay = styled(Dialog.Overlay)`
  background: transparent;

  position: fixed;
  inset: 0;
`;

const CloseMenuBtn = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  position: absolute;
  top: 39px;
  right: 35px;

  &[data-state='closed'] {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${COLORS.White};
  font-size: ${12 / 16}rem;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
`;

const NavList = styled.ul`
  line-height: 1.17;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
  gap: 32px;
`;

// To remove the li warning
const NavListItem = styled.li``;

const Content = styled(Dialog.Content)`
  position: absolute;

  background: ${COLORS.Primary22};
  color: ${COLORS.White};
  padding: ${40 / 16}rem 0;

  width: ${223 / 16}rem;
  right: 32px;
  top: 88px;
`;

export default MobileNav;
