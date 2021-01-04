import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {colors} from '../../config/theme';
import {AppInput, AppText} from '../styledComponents';

const Wrapper = styled.View``;

const Label = styled(AppText)`
  margin-bottom: 6px;
`;

const TextInput = styled(AppInput)`
  border-color: ${(props) =>
    props.error ? colors.ERROR : colors.BORDER_COLOR};
`;

const InputComponent = ({
  label,
  action,
  placeholder,
  title,
  required,
  keyboardType,
  maxLength,
  capitalize,
  errorState,
}) => {
  const [error, setError] = useState(false);
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
    action(value, error);
  };

  console.log(errorState);

  return (
    <Wrapper>
      <Label fontSize="14px" title={title}>
        {label}
        {required && <AppText color={colors.ERROR}>*</AppText>}
      </Label>
      <TextInput
        onKeyPress={() => setError(false)}
        error={error || errorState}
        onEndEditing={() =>
          required && !text ? setError(true) : setError(false)
        }
        maxLength={maxLength || 100}
        keyboardType={keyboardType || 'default'}
        placeholder={placeholder}
        onChangeText={handleTextChange}
      />
    </Wrapper>
  );
};

export {InputComponent};
