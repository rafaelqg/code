import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, SectionList, ScrollView, TextInput, Button,Picker, Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView, VirtualizedList } from 'react-native';
import { Pressable } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { Alert } from 'react-native';


export default function App() {
 const [programmingLanguage, setProgrammingLanguage] = React.useState("React Native");
 const [cssClass01, setCssClass01] = React.useState({color:"orange",fontSize:22});

 const showMessage= (title, message, p3)=>{
   Alert.alert(
        title,
        message,
        [
          { text: "React", onPress: () => {
              setProgrammingLanguage("React");
              let newObject={...cssClass01};
              newObject.color="red";
              setCssClass01(newObject);
          } },
          { text: "Java Script Vanila", onPress: () => {
            let newObject={...cssClass01};
            newObject.color="green";
            setCssClass01(newObject);
            setProgrammingLanguage("Java Script Vanila");
          } }
        ]
      );
  }
  
  let cssClass02={padding:6,textAlign:"right",  backgroundColor:"yellow"};
  let styleList=[cssClass01,cssClass02]; 
  const Demonstracao06122021=()=>{
    return(
    <View style={[styles.container,{flexDirection:"column"}]}>
    <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
        <Text style={[styles.appHeader, {width:200, color:"purple", backgroundColor:"#BBB"}, {borderBottomColor: "blue", borderBottomWidth: StyleSheet.hairlineWidth}]} onPress={()=>{showMessage("Meu titulo","minha mensagem")}}>Aula 06.12.2021</Text>
        <Text style={{width:200}}>Profile</Text>
        <Text style={{width:200, position:"relative", top:10, left:350}}> Menu</Text>
    </View>
    {/*<Text style={[cssClass01,cssClass02]}>{programmingLanguage}</Text>*/}
    <View style={{flex:3, flexDirection:"column", backgroundColor:"green", width:"100%"}}>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1}}>Programming language:</Text>
          <Text style={{flex:1}}>{programmingLanguage}</Text>
          <Text style={{flex:1}}>Ação...</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1}}>Programming language:</Text>
          <Text style={{flex:1}}>Python</Text>
          <Text style={{flex:1}}>Ação...</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={{flex:1}}>Programming language:</Text>
          <Text style={{flex:1}}>PHP</Text>
          <Text style={{flex:1}}>Ação...</Text>
        </View>
       {/* <Text style={{width:200, position:"relative", top:-60, left:350}}> Menu</Text>*/}
    </View>
    <Text style={{flex:1, backgroundColor:"yellow",width:"100%"}}>Footer</Text>
    {/*<Text style={StyleSheet.flatten(styleList)}>{programmingLanguage}</Text>*/}
   {/* <Text style={styles.box}>BOX</Text>*/}
  </View>
    )
  }

  const Assignment07=()=>{
      const citiesInitialState=[
        {city:"Curitiba", state:"Parana"},
        {city:"Florianopolis", state:"Santa Catarina"},
        {city:"São Paulo", state:"São Paulo"},
        {city:"Rio de Janeiro", state:"Rio de Janeiro"}
      ];
      const removeCity=(city)=>{
        let citiesNewState=cities.filter(el=>{
            return city.city==el.city && city.state==el.state? false : true;
        });
        setCities(citiesNewState);
      }
      const [cities,setCities] = React.useState(citiesInitialState);
      return(
        <View style={{flex:1, marginTop:50}}>
          <Text >Cities</Text>
          <View style={{flex:1}}> 
            {cities.map( city=>{
              return (<View style={{flexDirection:"row"}}>
                <Text style={{flex:1}}>{city.city}</Text>
                <Text style={{flex:1}}>{city.state}</Text>
                <Text style={{flex:1}} onPress={()=>{
                  removeCity(city)
                }}>Excluir</Text>
              </View>)
            })}
          </View>
        </View>
      )
  }

  return (
    <Assignment07 />
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    //height:300,
   justifyContent: 'center',
   marginTop: 50,
  },
  appHeader:{
    fontSize:25,
    color:"darkblue"
  },
  box:{
  //...StyleSheet.absoluteFill,
    top:250,
    left:100,
    width:50,
    height:50,
    backgroundColor:"brown"
  }
  }
);
