import {Props, Window} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList } from 'react-native';
import { AppColors, Styles } from "./styles";
import { NavigationContainer, NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MainView } from "./components/MainView";







export const TelaDePersonagens = () => {
    const [dados,setDados] = useState([]);
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        // renderizar personagem

        return <View></View>
    }

    return <MainView>
        <FlatList style={{width:'80%'}} data={dados} renderItem={renderItem}></FlatList>
        <TouchableOpacity style={{flex:1,position:'absolute',bottom:Window.height/20}} onPress={() => {
            navigation.navigate('CriacaoDePersonagens')
        }}>
            <View style={{backgroundColor:'green',alignItems:'center',borderRadius:15}}>
                <Text style={{margin:'4%',fontSize:22}}>Adicionar</Text>
            </View>
        </TouchableOpacity>
    </MainView>
}


