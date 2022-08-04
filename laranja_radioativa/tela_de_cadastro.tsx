import {DBContext, Hash, Props, Window} from "./geral";
import React, { useState,Component, useContext } from 'react';
import { Image,StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "./styles";
import * as Crypto from 'crypto-js/sha256';
import { Accordion } from "./components/accordion";
import { PopupCard } from "./components/PopupCard";
import { runOnJS, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { AlertPopup } from "./components/AlertPopup";
import App from "./App";

interface TextInputInterface {
    onChangeText?: (arg0:string) => void
}

export const TelaDeCadastro = () => {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [username,setUsername] = useState('');
    const [alertPopupVisibility,setAlertPopupVisibility] = useState(false);
    const [alertPopupText,setAlertPopupText] = useState('');
    


    const MyTextInput = ({onChangeText} : TextInputInterface) => {
        return <View style={{borderWidth:5,margin:'5%',width:'70%',borderColor:AppColors.marrom}}>
                <TextInput onChangeText={onChangeText? onChangeText : () => {}} style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
    }

    return <View style={{backgroundColor:AppColors.laranja_radioativo,borderRadius:10,alignItems:'center'}}>
        <View style={{height:'20%'}}></View>
        <Text>Insira o nome de Usuário</Text>
        <MyTextInput onChangeText={(text) => {
            setUsername(text);
        }}></MyTextInput>
        <Text>Insira seu email</Text>
        <MyTextInput onChangeText={(text) => {
            setEmail(text);
        }}></MyTextInput>
        <Text>Insira a senha</Text>
        <MyTextInput onChangeText={(text) => {
            setSenha(text);
        }}></MyTextInput>
        <TouchableOpacity onPress={() => {
            if(email.length == 0){
                alert('Por favor preencha o email.');
                return;
            }
            if(username.length == 0){
                alert('Por favor preencha o nome de usuário')
                return;
            }
            if(senha.length == 0){
                alert("Por favor preencha a senha");
                return;
            }
            fetch('https://dnd-party.herokuapp.com/database/users',{
                method:"POST",
                body: JSON.stringify({
                    user_name: username,
                    user_password_hash: Hash(senha),
                    email: email
                })
            }).then((response) => {
                console.log(response.body);
            }).catch((err) => {
                console.log(JSON.stringify(err))
            });

        }}>
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',marginHorizontal:'10%',marginVertical:'2%',fontSize:18}}>Cadastrar</Text>
            </View>
        </TouchableOpacity>
        <View style={{height:'10%'}}></View>
        <AlertPopup visible={alertPopupVisibility}>
            <View style={{height:'100%',backgroundColor:AppColors.laranja_radioativo}}>
                <Text>{alertPopupText}</Text>
                <Button onPress={() => {
                    setAlertPopupVisibility(false);
                }} title={'OK'}></Button>
            </View>
        </AlertPopup>
    </View>
}