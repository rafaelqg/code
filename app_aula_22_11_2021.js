import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, SectionList, ScrollView, TextInput, Button} from 'react-native';


export default function App() {
  const  [number, setNumber] = React.useState(0);
  //variables assigment 01
  const  [name, setName] = React.useState("");
  const  [email, setEmail] = React.useState("");
  const  [phone, setPhone] = React.useState("");
  const  [people, setPeople] = React.useState([]);
  const [sectionsAgenda, setSectionsAgenda]= React.useState([]);

  let getData= ()=>{
    let list=[
              {name: 'Dalsin', key: 1 },
              {name: 'Dan', key: 2 },
              {name: 'Dominic', key: 3},
              {name: 'Jackson', key: 4},
              {name: 'James', key: 5},
              {name: 'Joel', key: 6},
              {name: 'John', key: 7},
              {name: 'Jillian', key: 8},
              {name: 'Jimmy', key: 9},
              {name: 'Julie', key: 10},
        ];
      list.forEach((element, index, array)=>{
          array[index].name=array[index].name.toUpperCase();
      });
      return list;
};
    
  const renderFlatListItem = function(item){
    return ( <View>
      <Text>{item.key} - {item.name} -  <Image source={IMG_REF} style={{width:20, height:20}}  /></Text>
     
      <Text>{"\n"}</Text>
    </View>);
  }
  {/* 
        renderItem={({item}) => 
          <View>
            <Text>{item.key} - {item.name}</Text>
            <Text>{"\n"}</Text>
          </View>
        }
      */} 
         {/*
    
      */}
      const IMG_REF=require('./img/logo.png') ;
      let sections=[
                     {title: 'C', data: ['Carlos', 'Carolina']},
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                  ];

   const doubleNumber=function(){
     let double=number*2;
     setNumber(double);
   }

const generateSectionObject= function (array){
  let map= new Map();
  array.forEach(item=>{
    let firstLetter=item.name.charAt(0).toUpperCase();
    let dataSection=map.get(firstLetter);
    if(typeof(dataSection)=="undefined"){
        let initList=[item];
        map.set(firstLetter,initList);
    }else{
      dataSection.push(item);
    }
  });
  let sections=[];

  map.forEach((value,key)=>{
    sections.push({title:key, data:value});
  });
  setSectionsAgenda(sections);
  }

   const addPerson=()=>{
      let person={
        "name":name,
        "phone":phone,
        "email":email
      }
      //people.push(person);
      let people2=[...people, person];//JSON.parse(JSON.stringify(people));
      setPeople(people2);
      generateSectionObject(people2);
   }

   const renderPersonItem=(item)=>{
      return(<Text>{item.name} - {item.phone}{"\n"}{item.email}</Text>);
   }

  return (   
    <View style={styles.container}>
      <Text>FORM - ADD PERSON</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name..."
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone..."
      />
    <TextInput
        value={email}
        onChangeText={setEmail} 
        placeholder="E-mail..."
      />
      <Button
        title="INSERT"
        onPress={addPerson}
      />
      <Text>RECORDS</Text>
      <FlatList
          data={people}
          renderItem={({item}) => renderPersonItem(item)} 
        />

        <SectionList
            sections={sectionsAgenda}
            renderItem={({item}) => renderPersonItem(item)}
            renderSectionHeader={({section}) => <Text>{section.title.toUpperCase()+" - ("+section.data.length+")"}</Text>}
            keyExtractor={(item, index) => item.key}
          />
      {/*
      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Numeric keyboard"
        keyboardType="numeric"
      />
      <Text>{number}</Text>
      <Button 
        onPress={doubleNumber}
        title="DOUBLE"
        color="#666"
      />
      */}
{/*
       <ScrollView>
        <Image source={IMG_REF} style={{width:50, height:50}}  />
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <SectionList
            sections={sections}
            renderItem={({item}) => <Text >{item}</Text>}
            renderSectionHeader={({section}) => <Text>{section.title.toLowerCase()+" - ("+section.data.length+")"}</Text>}
            keyExtractor={(item, index) => item.key}
          />
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
    <FlatList
          data={getData()}
          renderItem={({item}) => renderFlatListItem(item)} 
        />
        
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
      </ScrollView>
*/}
      <StatusBar style="auto" backgroundColor="#888" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
