import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, SectionList, ScrollView, TextInput, Button,Picker, Switch} from 'react-native';


export default function App() {

  const cursos=[
    {id:10, nome:"Ciência da Computação", quantidadeDeFases:10},
    {id:20,nome:"Engenharia da Computação", quantidadeDeFases:10},
    {id:30,nome:"Análise e Desenvolvimento de Sistemas", quantidadeDeFases:8},
    {id:40,nome:"Ciência de Dados", quantidadeDeFases:6},
  ];

  const [periodo, setPeriodo] = React.useState("1");
  const [saudacao, setSaudacao] = React.useState("");
  const [curso, setCurso] = React.useState(cursos[2]);
  const [matriculaAberta, setMatriculaAberta]= React.useState(false);
  const [pais, setPais]= React.useState("");
  const [cidade, setCidade]= React.useState("");
  const [cidades, setCidades]= React.useState([]);

  const [descricaoCurso, setDescricaoCurso]=React.useState("");

  const ENUM_PERIODO={
    MATUTINO:1,
    VESPERTINO:2,
    NOTURNO:3
  }

 

  const disciplinas={
    "1":"React",
    "2": "React Native",
    "3": "Angular",
    "4": "Fundamentos de Programação",
    "5": "POO com JS",
  } 

  const handleChangeCurso= function (value, index){
    setCurso(value);
    setDescricaoCurso(value.nome +"("+value.id+")");
  }

  const handleChangePais= function (value, index){
    setPais(value);
    let cidades=[];
    switch(value){
      case "USA":
        cidades=["New York","Pitsburg", "Philadelfia"];
        break;
      case "China":
        cidades=["Pequim","Xanhai","Macau"];
        break;
      case "England":
        cidades=["London","Liverpool","Cambrige"]; 
        break;
      case "German":
        cidades=["Munchen","Berlin","Frankfurt"];
        break;
    }
    setCidades(cidades);
  }

  const handleChangeCidade= function (value, index){
    setCidade(value);
  }

  const handleChangePeriodo= function (value, index){
    setPeriodo(value);
    let mensagemSaudacao="";
    value=parseInt(value);
    switch(value){
      case ENUM_PERIODO.MATUTINO:
        mensagemSaudacao="Bom dia!";
        break;
      case ENUM_PERIODO.VESPERTINO:
        mensagemSaudacao="Boa tarde!";
        break;
      case ENUM_PERIODO.NOTURNO:
        mensagemSaudacao="Boa noite!";
        break;
    }
    setSaudacao(mensagemSaudacao);
  }

  //const toggleSwitch = () => setMatriculaAberta(previousState => !previousState);
  const toggleSwitch = function (){
    setPeriodo("1");
    setMatriculaAberta(!matriculaAberta);
  }
  
  
  
  

  if(!matriculaAberta){
    return (  
      <View>
      <Text>Matricula aberta?</Text>
        <Switch 
          trackColor={{ false: "#666", true: "#F00" }}
          thumbColor={matriculaAberta ? "#CCC" : "#222"}
          value={matriculaAberta}
          onValueChange={toggleSwitch}
        />
      </View>
    )
  }else{
    return (   
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="#888" />
        <Text>Aula 24/11/2021</Text>
        <Text>Matricula aberta?</Text>
        <Switch 
          trackColor={{ false: "#666", true: "#F00" }}
          thumbColor={matriculaAberta ? "#CCC" : "#222"}
          value={matriculaAberta}
          onValueChange={toggleSwitch}
        />
        <Text>Periodo:</Text>
        <Picker selectedValue={periodo}  style={{ height: 50, width: 250 }} onValueChange={(v,i)=>{handleChangePeriodo(v,i)}}>
          <Picker.Item label="Matutino" value={ENUM_PERIODO.MATUTINO}  /> 
          <Picker.Item label="Vespertino" value={ENUM_PERIODO.VESPERTINO}  /> 
          <Picker.Item label="Noturno" value={ENUM_PERIODO.NOTURNO}  /> 
        </Picker>
        <Text>Periodo selecionado:{periodo}</Text>
        <Text>{saudacao}</Text>
        <Text>Curso</Text>
        <Picker style={{ height: 50, width: 250 }} selectedValue={curso} onValueChange={(v,i)=>{handleChangeCurso(v,i)}} >
          {cursos.map((curso)=>{
              return <Picker.Item value={curso} label={curso.nome+"("+curso.quantidadeDeFases+")"} />
          })}
        </Picker>
        <Text>{descricaoCurso}</Text>
        <Text>Disciplinas</Text>
        <Picker style={{ height: 50, width: 300 }} >
          {Object.keys(disciplinas).map((key)=>{
              return <Picker.Item value={key} label={disciplinas[key]} />
          })}
        </Picker>
        <Text>Exercicio 4</Text>
        <Text>Pais</Text>
         <Picker selectedValue={pais}  style={{ height: 50, width: 250 }} onValueChange={(v,i)=>{handleChangePais(v,i)}}>
          <Picker.Item label="China" value="China"  /> 
          <Picker.Item label="USA" value="USA"  /> 
          <Picker.Item label="England" value="England"  /> 
          <Picker.Item label="German" value="German"  />
        </Picker>
        <Text>Cidade</Text>
        <Picker selectedValue={cidade}  style={{ height: 50, width: 250 }} onValueChange={(v,i)=>{handleChangeCidade(v,i)}}>
          {cidades.map((cidade)=>{
              return <Picker.Item value={cidade} label={cidade} />
          })}
        </Picker>
      </View>
      
    );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
