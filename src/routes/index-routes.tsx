import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {RootNavigation} from './root';


export const Routes: React.FC = React.memo(() => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
});
