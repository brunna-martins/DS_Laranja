import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "./styles";





const styles = StyleSheet.create({
  containerForm:{
    flex:2,
    backgroundColor: '#cd5f00'
  }
})


export const TelaDeMenu = () => {
    return (
      <View style={styles.containerForm}>
        <Text style={{}}>Tela de Menu</Text>
        <Text style={{}}>Teste Teste Teste</Text>  
      </View>
    )
}
  
