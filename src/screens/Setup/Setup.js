import React, {useState} from 'react';
import {ScreenBase} from '../ScreenBase';
import styled from 'styled-components';
import {CardComponent} from '../../components/CardComponent/CardComponent';
import {
  AppText,
  FlexView,
  Space,
  SpaceBetween,
} from '../../components/styledComponents';
import {InputComponent} from '../../components/InputComponent/InputComponent';
import {BtnComponent} from '../../components/BtnComponent/BtnComponent';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const SetupScreen = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [nameError, setNameError] = useState(true);
  const [upiError, setUpiError] = useState(true);
  const [nameErrorState, setNameErrorState] = useState(false);
  const [upiErrorState, setUpiErrorState] = useState(false);

  const handleSubmit = () => {
    if (nameError || upiError) {
      if (nameError) setNameErrorState(true);
      if (upiError) setUpiErrorState(true);
      alert('Please fill the fields highlighted in red');
    } else {
      setUpiErrorState(false);
      setNameErrorState(false);
      navigation.navigate('Details');
    }
  };

  return (
    <ScreenBase>
      <Wrapper>
        <AppText title>setup your GoDutch account</AppText>
        <Space size="6px" />

        <CardComponent>
          <Space size="60px" />
          <AppText title capitalize>
            current profession
          </AppText>
          <Space size="6px" />
          <SpaceBetween>
            <BtnComponent
              label="Student"
              outline
              active={index === 1}
              action={() => setIndex(1)}
              light
            />
            <BtnComponent
              label="Professional"
              outline
              active={index === 2}
              action={() => setIndex(2)}
              light
            />
          </SpaceBetween>
          <Space size="20px" />

          <InputComponent
            label="full name"
            placeholder="E.g: John Doe"
            required
            action={(text, error) => setNameError(error)}
            errorState={nameErrorState}
          />
          <Space size="20px" />
          <InputComponent
            label="UPI ID"
            placeholder="E.g johnDoe@yl"
            required
            action={(text, error) => setUpiError(error)}
            errorState={upiErrorState}
          />
          <Space size="30px" />
          <BtnComponent label="Continue" action={handleSubmit} />
          <Space size="20px" />
        </CardComponent>
      </Wrapper>
    </ScreenBase>
  );
};

export {SetupScreen};
