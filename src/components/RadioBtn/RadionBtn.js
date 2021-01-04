import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {AppText} from '../styledComponents';

const Wrapper = styled.View``;

const componentName = ({leftLabel, rightLabel}) => {
  return (
    <Wrapper>
      <AppText title>current profession</AppText>
      <Space size="6px" />

      <SpaceBetween>
        <BtnComponent label={leftLabel} outline />
        <BtnComponent label={rightLabel} outline inActive />
      </SpaceBetween>
    </Wrapper>
  );
};

export {componentName};
