import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList } from 'react-native';
import { Styles } from "./styles";
import { NavigationContainer, NavigationProp, StackActions } from "@react-navigation/native";







export const TelaDePersonagens = () => {
    const [ficha, setficha] = useState([
        {title: 'características', data: [ 'nome', 'raça', 'classe', 'experiência', 'tendência', 'antecedente' ] },
        {title: 'atributos', data: ['carisma', 'constituição', 'destreza', 'força', 'ínteligência', 'sabedoria'] }, 
        {title: 'perícias', data: ['Acrobacia(Des)', 'Arcanismo(Int)', 'Atletismo(For)', 'Atuação(Car)', 'Blefar(Car)', 'Furtividade(Des)', 'História(Int)', 'Intimidação(Car)', 'Ituição(Sab)', 'Ivestigação(Int)', 'Lidar com Animais(Sab)', 'Medicina(Sab)', 'Natureza(Int)', 'Percepção(Sab)','Persuasão(Car)', 'Prestidigitação(Des)', 'Religião(Int)', 'Sobrevivência(Sab)'] },
        {title: 'vida', data: ['número'] },
        {title: 'ataques/magias', data: ['várias coisas', 'várias coisas', 'várias coisas', 'várias coisas', 'várias coisas'] },
        {title: 'iniciativa', data: ['número'] },
        {title: 'deslocamento', data: ['número'] },
        {title: 'equipamento', data: ['várias coisas', 'várias coisas', 'várias coisas', 'várias coisas', 'várias coisas'] },
        {title: 'outras características', data: ['várias coisas', 'várias coisas', 'várias coisas', 'várias coisas', 'várias coisas'] },
    ]);

    const Item = ({ title }) => {
        return <View style={styles.item}>
            <Text style={styles.item}>{title}</Text>
        </View>
    }
            
        return(        
            <View style={styles.container}>
                <SectionList
                    sections={ficha}
                    keyExtractor={(item, index) => item + index}
                    renderItem= {({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                >
                </SectionList>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center', //AXYS X
    },
    item: {
        backgroundColor: 'orange',
        marginTop: 40,
        marginHorizontal: 10,
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 30,
    },
    header: {
        backgroundColor: 'white',
    },

})