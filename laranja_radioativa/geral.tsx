import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createContext, useContext } from 'react';
import * as SQLite from 'expo-sqlite';
import { Database } from 'expo-sqlite';

export interface Props {
    navigation: NavigationProp<any, any>;
}
  
export const DBContext = createContext(null as SQLite.WebSQLDatabase);