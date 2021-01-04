import React from 'react';
import styled from 'styled-components';
import {colors} from '../../config/theme';

const Wrapper = styled.View`
  background-color: ${colors.WHITE};
  padding-horizontal: 15px;
  border-radius: 5px;
  elevation: 3;
`;
const CardComponent = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export {CardComponent};
