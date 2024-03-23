import React from 'react'
import {PaperProvider} from 'react-native-paper'
import { NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/Screens/Home'
import Offers from './src/Screens/Offers'
import Buy from './src/Screens/Buy'
import Credit from './src/Screens/Credit'
import Sure from './src/Screens/Sure'
import SafeList from './src/Screens/SafeLists';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <PaperProvider >
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Ofertas" component={Offers} />
          <Tab.Screen name="Comprar" component={Buy} />
          <Tab.Screen name="Credit" component={Credit} />
          <Tab.Screen name="sure" component={SafeList} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App