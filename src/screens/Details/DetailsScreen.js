import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {BtnComponent} from '../../components/BtnComponent/BtnComponent';
import {CardComponent} from '../../components/CardComponent/CardComponent';
import {AppText, Space, UnderLineView} from '../../components/styledComponents';
import {colors} from '../../config/theme';
import {ScreenBase} from '../ScreenBase';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Content = styled.View`
  /* padding-vertical: 10px; */
`;

const ContentWrap = styled.View`
  padding-top: 15px;
`;

const DetailsScreen = ({navigation}) => {
  return (
    <ScreenBase>
      <Wrapper>
        <AppText capitalize title>
          Your Details
        </AppText>
        <Space size="2px" />
        <CardComponent>
          <ContentWrap>
            {Object.keys(user).map((keys, values, index) => {
              return (
                <Content key={keys}>
                  <AppText capitalize>{keys}</AppText>
                  <Space />
                  <UnderLineView />
                  <Space size="6px" />
                  <AppText capitalize color={colors.PRIMARY}>
                    {user[keys]}
                  </AppText>
                  <Space />
                  <UnderLineView />
                  <Space />
                </Content>
              );
            })}
          </ContentWrap>
        </CardComponent>
        <Space size="20px" />

        <BtnComponent
          label="Continue"
          action={() => navigation.navigate('Home')}
        />
      </Wrapper>
    </ScreenBase>
  );
};

export {DetailsScreen};

const user = {
  name: 'Priyank Ghanekar',
  mobileNumber: '+91 9967338128',
  'upi id': 'Priyank874@ybl',
  profession: 'student',
};
