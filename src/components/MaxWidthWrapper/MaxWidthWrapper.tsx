import styled from 'styled-components';
import { QUERIES } from '@/constants/Queries';

export const MaxWidthWrapper = styled.div`
  max-width: ${(1111 + 32) / 16}rem;
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export default MaxWidthWrapper;
