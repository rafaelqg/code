import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const professor="Rafael";
  const professores=[{
    nome:"Rafael",
    disciplina: "React Native",
  },{
    nome: "Diogo",
    disciplina: "Coordenador",
  }];

  const renderFlatListItem=(({item})=> 
  <View>
    <Text>
      {'\n'}
      {item.nome} | {item.disciplina}
      {'\n'}
    </Text>
    <Text>
      Ver Detalhes
    </Text>
  </View>
   );

//renderItem={({item})=>  <Text>{item.nome} - {item.disciplina}</Text>}
  return (
    <View style={styles.container}>
      <Text>{'\n'}{'\n'}{'\n'}Open up App.js to start working on your app!!!!</Text>
      <Text>{'\n'}Professor:{professor}</Text>
      
      {/*
      <Text>Esta é a primeira aula de React Native!</Text>
      */}
      {/*
      <FlatList data={[1,2,3,4]} renderItem={({item})=><Text>{item}</Text>} />
      */}
      <FlatList data={professores} renderItem={renderFlatListItem} />
      <StatusBar style="auto" />
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
