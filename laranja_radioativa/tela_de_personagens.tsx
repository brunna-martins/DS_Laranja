import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "./styles";
import { NavigationContainer, NavigationProp, StackActions } from "@react-navigation/native";
import Accordion from 'react-native-collapsible/Accordion';

() => (
  <Accordion
    activeSections={[0]}
    sections={['Section 1', 'Section 2', 'Section 3']}
    renderSectionTitle={this._renderSectionTitle}
    renderHeader={this._renderHeader}
    renderContent={this._renderContent}
    onChange={this._updateSections}
  />
);

const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...',
    },
  ];
  
  class AccordionView extends Component {
    state = {
      activeSections: [],
    };
  
    _renderSectionTitle = (section) => {
      return (
        <View style={styles.content}>
          <Text>{section.content}</Text>
        </View>
      );
    };
  
    _renderHeader = (section) => {
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
      );
    };
  
    _renderContent = (section) => {
      return (
        <View style={styles.content}>
          <Text>{section.content}</Text>
        </View>
      );
    };
  
    _updateSections = (activeSections) => {
      this.setState({ activeSections });
    };
  
    render() {
      return (
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      );
    }
  }


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

