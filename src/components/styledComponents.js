import {colors} from '../config/theme';
import Dash from 'react-native-dash';

Dash.defaultProps = {
  dashColor: colors.BORDER_COLOR,
  dashThickness: 2,
  dashLength: 2,
};

import styled from 'styled-components';

export const Cards = styled.View`
  background-color: ${colors.WHITE};
  padding-horizontal: 15px;
  border-radius: 5px;
  elevation: 3;
`;

export const AppInput = styled.TextInput`
  padding: 12px;
  border-radius: 5px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : colors.BORDER_COLOR};
  border-width: 1px;
  text-align: center;
  font-size: 15px;
  font-family: 'Montserrat-Regular';
`;

export const AppText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: ${(props) => (props.light ? '400' : '500')};
  font-size: 15px;
  color: ${(props) =>
    props.title ? colors.TITLE : props.color ? props.color : colors.SECONDARY};
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
`;

export const AppBtn = styled.TouchableOpacity`
  border-color: ${(props) =>
    props.outline && props.active ? colors.PRIMARY : colors.BORDER_COLOR};
  border-width: 1px;
  background-color: ${(props) =>
    props.outline ? colors.WHITE : colors.PRIMARY};
  height: 50px;
  justify-content: center;
  padding-horizontal: 30px;
`;

export const Space = styled.View`
  margin: ${(props) => (props.size ? props.size : '10px')};
`;

export const UnderLineView = styled(Dash)`
  align-self: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpaceBetween = styled(FlexView)`
  justify-content: space-between;
`;
