import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createContext, useContext } from 'react';
import * as SQLite from 'expo-sqlite';
import { Database } from 'expo-sqlite';
import * as Crypto from 'expo-crypto';


export interface Props {
    navigation: NavigationProp<any, any>;
}
  
export const Hash = async (password : string) => {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
    );
    return digest;
}


export const DBContext = createContext(null as SQLite.WebSQLDatabase);