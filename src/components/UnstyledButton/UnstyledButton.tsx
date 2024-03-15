import * as React from 'react';
import styled from 'styled-components';

type UnstyledButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

function UnstyledButton({ children, ...delegated }: UnstyledButtonProps) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;

export default UnstyledButton;
