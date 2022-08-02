import {DBContext, Hash, Props} from "./geral";
import React, { useState,Component, useContext } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { Styles } from "./styles";
import * as Crypto from 'crypto-js/sha256';
import { Accordion } from "./components/accordion";



export const TelaDeLogin = () => {
    const [login,setLogin] = useState('');
    const [senha,setSenha] = useState('');
    const [response,setResponse] = useState('');
    const [classes,setClasses] = useState([]);
    const db = useContext(DBContext);


    const style = StyleSheet.create({
        all: {
            margin:12,
            padding:10,
            borderRadius:1,
            borderWidth:1,
            width:'60%'
        }
    })

    const renderItem = ({item,index}) => {


        return <Accordion headerTitle={item.class_name} maxSize={4000}>
            <Text>{item.specific_data}</Text>
        </Accordion>
     }

    return <View style={Styles.mainView}>
        <Button title={'Mostre-me as classes plebeu!'} onPress={() => {
            db.readTransaction(tx => {
                tx.executeSql(`SELECT class_name,specific_data FROM classes`,[],(tx,result) => {
                    setClasses(result.rows._array)
                },(tx,err) => {
                    console.log(err);
                    return false;
                });
            })
        }}></Button>
        <FlatList style={{width:'100%'}} renderItem={renderItem} data={classes}>

        </FlatList>
    </View>
}



// transação

    //begin
    //trecos
    //end
    //commit