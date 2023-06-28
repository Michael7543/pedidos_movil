import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteStack } from '../cliente/ClienteStack';
import { ProductoStack } from '../producto/ProductoStack';
import { LogOut } from './LogOut';
import { LineaStack } from '../linea_investigacion/LineaStack';

interface Props {
}

const Tab = createBottomTabNavigator();

export const HomeTab:FC <Props> = () => {
 return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Tab.Screen name="ClienteStack" component={ClienteStack} />
      <Tab.Screen name="ProductoStack" component={ProductoStack} />
      <Tab.Screen name="LineaStack" component={LineaStack} />
      <Tab.Screen name="LogOut" component={LogOut} />
    </Tab.Navigator>
 )
}