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
 
  Aula08122021= function (){
      let imgRef=require('./img/logo.png');
      return(
          <View style={[styles.container, {backgroundColor:"#777"}]}>
            <ImageBackground source={imgRef} resizeMode="center" style={{flex:1,width:"100%", opacity:0.8}}> 
             <Text style={{fontSize:22, color: "#FFF"}}>Aula 08.12.2021</Text> 
            </ImageBackground>
          </View> 
      )
  }

   let KeyboardavoidingviewDemo= function (){
          return(
              <KeyboardAvoidingView behavior="padding" style={styles.container} > 
                <Text style={{fontSize:25}}>--Keyboard avoiding view--{"\n"}</Text>
                <Text style={{fontSize:25}}>{"\n"}Authentication{"\n"}</Text>
                <Text style={{fontSize:25}}>{"\n"}Input your user code:{"\n"}</Text>
                <TextInput placeholder="Username" />
                <Text style={{fontSize:25}}>{"\n"}Input your user password:{"\n"}</Text>
                <TextInput secureTextEntry={true} placeholder="Password" />
                <Button title="Authenticate" /> 
            </KeyboardAvoidingView>
          )
      }
    
let VirtualizedListExample=()=>{
   const dataInitalState = [
    {id:1, nome:"Felipe"},
    {id:2, nome:"Sabrina"},
    {id:3, nome:"Alan"},
    {id:4, nome:"Rafael"},
    {id:5, nome:"Felipe"},
    {id:6, nome:"Sabrina"},
    {id:7, nome:"Alan"},
    {id:8, nome:"Rafael"},
    {id:9, nome:"Felipe"},
    {id:10, nome:"Sabrina"},
    {id:12, nome:"Alan"},
    {id:13, nome:"Rafael"},
    {id:14, nome:"Felipe"},
    {id:15, nome:"Sabrina"},
    {id:16, nome:"Alan"},
    {id:17, nome:"Rafael"}
  ];
  const [details,setDetails]=React.useState("");
  const [data,setData]=React.useState(dataInitalState);
  




  const showMessage = (message) =>{
    Alert.alert(
                  "Alert",
                  MessageEvent,
                  [
                    { text: "OK", onPress: () => {} }
                  ]
              );
  }
           
   const onPressFunction = ()=>{
            showMessage("Pressable....");
        }
    


   const getItem = (data, index) => (data[index]);

   const getItemCount = (data) => data.length;

   const Item = ({ person }) => (
   <View  style={[styles.item, {flex:1,flexDirection:"row"}]}>
      <TouchableNativeFeedback background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''} style={{flex:2}}
          onPressIn={()=>{
            setDetails(person.nome+ " ("+person.id+")");
          }}
          
          onLongPress={()=>{
           Alert.alert(
                    "Alert",
                    "Confirm item deletion??",
                    [
                      { text: "OK", onPress: () => {
                        let dataFiltered=data.filter(el=> el.id==person.id?false:true);
                        setData(dataFiltered);
                      } },
                      { text: "CANCEL", onPress: () => {} }
                    ]
                );
          }}
          >
          <View style={{flex:1}}>
                <Text style={{fontSize:17, flex:2}}>{person.nome}</Text>
          </View>
     </TouchableNativeFeedback>
     <Button title="ADD" style={{heigth:20, flex:1}} /> 
     <Pressable background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''} style={{flex:1,backgroundColor:"red"}}
        // onPress={()=>{showMessage("onPress")}}
         onPressIn={()=>{showMessage("onPressIn")}}
         onPressOut={()=>{showMessage("onPressOut")}}
         onLongPress={()=>{showMessage("onLongPressIn")}}
               
     >
       <Text>DELETE</Text>
       <Text style={{fontSize:11}}>Obs: deleting item....</Text>
     </Pressable>
     <TouchableNativeFeedback background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''} style={{flex:1}}
          onPressIn={()=>{showMessage("onPressIn")}}
          onPressOut={()=>{showMessage("onPressOut")}}
          onLongPress={()=>{showMessage("onLongPressIn")}}
     >
       <View>
         <Text>SHARE</Text>
         <Text style={{fontSize:11}}>WhatsApp, Telegram</Text>
       </View>
     </TouchableNativeFeedback>
    </View>
  );
  
  let imgRef=require('./img/logo.png');
  return(
      <View style={styles.container}>
        <Text style={{fontSize:33}}>{details}</Text>
        <ImageBackground source={imgRef} resizeMode="repeat" style={{flex:1,width:"100%", opacity:1}}> 
             
          <VirtualizedList
          data={data}
          initialNumToRender={1}
          renderItem={({ item }) => <Item person={item} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          style={{width:"80%"}}
        />
      </ImageBackground>
  </View>
  )
}

const Assignment9= function(){
  const [counter, setCounter]= React.useState(1);
  const [color, setColor]= React.useState("gray");
  return(
    <View style={styles.container}>
        <Pressable style={{ backgroundColor:color, width:60,alignItems: 'center', borderRadius:20}}
          onPressIn={()=>{
            let newCounter=1;
            setCounter(newCounter);
            setColor("blue");
          }}
          onLongPress={()=>{
            let newCounter=counter+5;
            setCounter(newCounter);
            setColor("red");
          }}
          onPressOut={()=>{
            let newCounter=counter+3;
            setCounter(newCounter);
            setColor("gray");
          }}
        >
          <View>
            <Text style={{fontSize:43}}>!</Text>
          </View>
        </Pressable>
        <Text style={{fontSize:43}}>{counter}</Text>
    </View>
  )
}
  return (
    <VirtualizedListExample />
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
  item:{
    height:50,
    backgroundColor:"#0F0",
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
