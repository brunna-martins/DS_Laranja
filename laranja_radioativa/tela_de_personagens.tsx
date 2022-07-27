import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "./styles";
import { NavigationContainer, NavigationProp, StackActions } from "@react-navigation/native";






export function TelaDePersonagens ({navigation} : Props) {


    return <View style={Styles.mainView}>
        <Button 
            title='Criar novo personagem' 
            onPress={()=>{navigation.navigate('CriarP')}}>
        </Button>
        <Text>
            {'\n'}
        </Text>
        <Button 
            title='Visualizar personagens já criados' 
            onPress={()=>{navigation.navigate('VerP')}}>
        </Button>
    </View>
}

export function CriarPersonagem ({navigation} : Props) {
    return <View style={Styles.mainView}>
    
    </View>
}

export function VisualizarPersonagem ({navigation} : Props) {
    return <View style={Styles.mainView}>
        
    </View>
}