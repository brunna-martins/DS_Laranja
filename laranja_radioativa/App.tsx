import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { TelaDeLogin } from './tela_de_login';
import { TelaDeMenu } from './tela_de_menu';
import { CriarPersonagem, TelaDePersonagens, VisualizarPersonagem } from './tela_de_personagens';
import { TelaDeCompendium } from './tela_de_compendium';
import { DBContext, GlobalContext } from './geral';
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { TelaDeCadastro } from './tela_de_cadastro';
import { TelaDeCriacaoDePersonagens } from './tela_de_criacao_de_personagens';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export interface Props {
  navigation: NavigationProp<any, any>;
}

//função para mover o banco de dados do folder assets pro folder dos documentos do celular
const loadingFunc = async () => {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  };
  
  
  if(!await (await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/mainDB.db")).exists){
    await FileSystem.downloadAsync(
      Asset.fromModule(require('./assets/mainDB.db')).uri,
      FileSystem.documentDirectory + `SQLite/mainDB.db`
    ).then(() => {
      console.log('copied mainDB!');
    });
  }  
}


function MainScreen({navigation} : Props){
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Login" component={TelaDeLogin} options={{headerShown:false}}></Bottom.Screen>
      <Bottom.Screen name="Menu" component={TelaDeMenu}></Bottom.Screen>
      <Bottom.Screen name="Personagens" component={TelaDePersonagens} options={{headerShown:false}}></Bottom.Screen>
      <Bottom.Screen name="Itens" component={TelaDeCompendium}></Bottom.Screen>
    </Bottom.Navigator>
  );
}

export default function App() {

  loadingFunc();

  return (
    <GlobalContext.Provider value={{user_id:null}}>
    <DBContext.Provider value={(() => {
      return SQLite.openDatabase('mainDB.db');
    })()}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: "rgb(20,20,90)"},
            headerTintColor: 'rgb(255,255,255)',
          }}
        >
          <Stack.Screen name="Main" options={{headerShown:false,gestureEnabled:false,headerLeft: () => <></>}} component={MainScreen} />
          <Stack.Screen name="CriacaoDePersonagens" options={{headerShown:false}} component={TelaDeCriacaoDePersonagens} />
        </Stack.Navigator>
      </NavigationContainer>
      </DBContext.Provider>
      </GlobalContext.Provider>
    );

}