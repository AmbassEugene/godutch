import React from 'react';
import styled from 'styled-components';
import {colors} from '../../config/theme';
import {AppBtn, AppText} from '../styledComponents';

const Wrapper = styled(AppBtn)`
  border-radius: 5px;
  align-items: center;
  align-self: center;
`;
const Label = styled(AppText)`
  color: ${(props) =>
    props.outline && props.active
      ? colors.PRIMARY
      : props.outline
      ? colors.SECONDARY
      : colors.WHITE};
  font-size: 19.05px;
`;

const BtnComponent = ({action, label, outline, active, light}) => {
  return (
    <Wrapper onPress={action} outline={outline} active={active}>
      <Label capitalize light={light} outline={outline} active={active}>
        {label}
      </Label>
    </Wrapper>
  );
};

export {BtnComponent};
