import {DBContext, Hash, Props, Window} from "./geral";
import React, { useState,Component, useContext } from 'react';
import { Image,StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "./styles";
import * as Crypto from 'crypto-js/sha256';
import { Accordion } from "./components/accordion";
import { PopupCard } from "./components/PopupCard";
import { runOnJS, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { TelaDeCadastro } from "./tela_de_cadastro";
import { MainView } from "./components/MainView";



export const TelaDeLogin = () => {
    const [login,setLogin] = useState('');
    const [senha,setSenha] = useState('');
    const [response,setResponse] = useState('');
    const [classes,setClasses] = useState([]);
    const db = useContext(DBContext);
    const [visible,setVisibility] = useState(false);

    const style = StyleSheet.create({
        all: {
            margin:12,
            padding:10,
            borderRadius:1,
            borderWidth:1,
            width:'60%'
        }
    })

    const MyTextInput = () => {
        return <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.marrom}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
    }


    return <>
    <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
    <MainView>
        <Image source={require('./assets/images/logo.jpeg')} style={{height:'20%',aspectRatio:1,resizeMode:'stretch',marginVertical:'15%'}}></Image>
        <Text style={{color:AppColors.laranja_radioativo}}>Nome de Usuário</Text>
        <MyTextInput></MyTextInput>
        <Text style={{color:AppColors.laranja_radioativo}}>Senha</Text>
        <MyTextInput></MyTextInput>
        <TouchableOpacity>
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',marginHorizontal:'10%',marginVertical:'2%',fontSize:20}}>Log in</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginVertical:'3%',color:AppColors.laranja_radioativo}}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => {
                setVisibility(true)
            }}>
                <Text style={{color:'blue'}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    </MainView>
    </Pressable>
    <PopupCard paddingTop={'15%'}  visible={visible} onExit={() => {
        setVisibility(false)
    }}>
        <TelaDeCadastro></TelaDeCadastro>
    </PopupCard>
    </>

}
