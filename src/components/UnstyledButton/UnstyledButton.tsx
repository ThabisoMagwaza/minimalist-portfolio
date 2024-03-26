import * as React from 'react';
import styled from 'styled-components';

type UnstyledButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  function UnstyledButton({ children, ...delegated }, ref) {
    return (
      <Wrapper ref={ref} {...delegated}>
        {children}
      </Wrapper>
    );
  }
);

const Wrapper = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;

export default UnstyledButton;
