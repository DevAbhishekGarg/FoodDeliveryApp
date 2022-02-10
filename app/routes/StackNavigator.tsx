import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawer from './DrawerNavigator';
import {
  OnboardingModel,
  SignInModel,
  SignUpModel,
  OTPModel,
  PasswordModel,
  DetailModel,
  MyCardsModel,
  AddNewCardModel,
  CheckoutModel,
  SuccessModel,
} from '../viewModels';

type Abc = {
  Onboarding: Function;
  SignIn: Function;
  SignUp: Function;
  OTP: Function;
  Password: Function;
  Home: Function;
  Detail: Function;
  MyCart: Function;
  MyCards: Function;
  AddNewCard: Function;
  Checkout: Function;
  Success: Function;
  Drawer: Function;
  Tab: Function;
};

const Stack = createNativeStackNavigator<Abc>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingModel} />
        <Stack.Screen name="SignIn" component={SignInModel} />
        <Stack.Screen name="SignUp" component={SignUpModel} />
        <Stack.Screen name="OTP" component={OTPModel} />
        <Stack.Screen name="Password" component={PasswordModel} />
        <Stack.Screen name="Detail" component={DetailModel} />
        <Stack.Screen name="MyCards" component={MyCardsModel} />
        <Stack.Screen name="AddNewCard" component={AddNewCardModel} />
        <Stack.Screen name="Checkout" component={CheckoutModel} />
        <Stack.Screen name="Success" component={SuccessModel} />
        <Stack.Screen name="Drawer" component={MainDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
