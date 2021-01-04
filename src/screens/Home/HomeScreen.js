import React, {useState} from 'react';
import {Image} from 'react-native';
import {ScreenBase} from '../ScreenBase';
import styled from 'styled-components';
import {CardComponent} from '../../components/CardComponent/CardComponent';
import {Space, UnderLineView} from '../../components/styledComponents';
import {InputComponent} from '../../components/InputComponent/InputComponent';
import {BtnComponent} from '../../components/BtnComponent/BtnComponent';
import logo from '../../../assets/images/logo.png';
import {colors} from '../../config/theme';
import {mobile_RE} from '../../utils/regex';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 185px;
  height: 40px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HomeScreen = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const handleSubmit = () => {
    let validMobile = mobile_RE.test(number);

    if (error) {
      alert('Phone Number is mandatory');
      setErrorState(true);
      return;
    }
    if (!validMobile) {
      alert('Please enter a valid 10 digit phone number');
      setErrorState(true);
      return;
    }
    setErrorState(false);
    navigation.navigate('Setup');
  };

  const handlePhoneNumber = (text, errorStatus) => {
    setNumber(text);
    setError(errorStatus);
  };

  return (
    <ScreenBase>
      <Wrapper>
        <CardComponent>
          <Logo source={logo} />
          <Space size="20px" />
          <UnderLineView width="95%" />
          <Space size="30px" />
          <InputComponent
            keyboardType="phone-pad"
            label="Mobile number"
            required
            action={handlePhoneNumber}
            maxLength={10}
            placeholder="e.g: 8694023456"
            errorState={errorState}
          />
          <Space size="30px" />
          <BtnComponent label="Continue" action={handleSubmit} />
          <Space size="20px" />
        </CardComponent>
      </Wrapper>
    </ScreenBase>
  );
};

export {HomeScreen};
