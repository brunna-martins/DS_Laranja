import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Alert, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import { Styles } from "./styles";

import Button from "./components/Button";
import { MainView } from "./components/MainView";

export const TelaDeMenu = () => {
  const signIn = () => {
    alert('MELHOR APLICATIVO');
  }
    return (
      <MainView>
        <Button labelButton="AVENTURAS" onpress={signIn}/>
        <Button labelButton="PERSONAGENS" onpress={signIn}/>
        <Button labelButton="ITENS" onpress={signIn}/>
      </MainView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

