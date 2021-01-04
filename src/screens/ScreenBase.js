import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {colors} from '../config/theme';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
  padding: 10px;
`;

const ScreenBase = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export {ScreenBase};
