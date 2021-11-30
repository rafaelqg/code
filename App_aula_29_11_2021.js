import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, SectionList, ScrollView, TextInput, Button,Picker, Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    const products=[
      {
        name: "Camiseta",
        price: 200.6,
        description: "------",
        comments:[{comment:"Comment A", when: new Date()}, {comment: "Comment B", when: new Date()}]
      },
      {
        name: "Bermuda",
        price: 150.6,
        description: ".....",
        comments:[{comment:"Comment X", when: new Date()}, {comment: "Comment Y", when: new Date()}, {comment: "Comment Z", when: new Date()}]
      },
      {
        name: "Jaqueta",
        price: 450.6,
        description: "________",
        comments:[{comment:"Comment 01", when: new Date()}, {comment: "Comment 02", when: new Date()}, {comment: "Comment 03", when: new Date()}]
      }
    ]; 

    const MainScreen = ({ navigation, route }) => {

       let  lastScreen=typeof(route?.params?.lastScreen) != "undefined" ? route?.params?.lastScreen:"";

       
        return <View>
          <Text>This is the APP main screen - Aula 29/11/2021.</Text>
          <Button
            title="Go to config screen"
            onPress={() =>
               navigation.navigate('config', { dateTime: new Date(), professor: "Rafael" })
            }
      />

            <Button
                  title="Go to config screen - Alternative"
                  onPress={() =>
                     navigation.navigate('config', { dateTime: new Date() })
                  }
            />
          <Text>Last screen:{lastScreen}</Text>
          <FlatList data={products} renderItem={({item}) => ( 
                <Text onPress = { () => {
                  navigation.push("product" , {"product":item});
                } }>
                  {item.name} | {item.price}
                </Text>
              )}
            />
      </View>;
      };

    const ProductDetails = ({ navigation, route }) => {
      let product=route.params.product;
      return (<View>
            <Text>Name:{product.name}</Text>
            <Text>Price:{product.price}</Text>
            <Text>Description:{product.description}</Text>
            <Text onPress={
              ()=>{
                navigation.push("comments",{product:product})
              }
            }>See comments...</Text>
            </View>
          )
    }

    const ProductComments = ({ navigation, route }) => {
      let product=route.params.product;
      return (<View>
            <Text>Comments for product {product.name}</Text>
            <FlatList data={product.comments} renderItem={({item}) => ( 
                <Text>
                  {item.when.toUTCString()} | {item.comment}
                </Text>
              )}
            />
            </View>
          )
    }

    const ConfigScreen = ({ navigation, route }) => {
          let professor= typeof(route.params.professor) != "undefined"? route.params.professor:"---";
          let date= typeof(route.params.dateTime) != "undefined"? route.params.dateTime.toUTCString():"---";
             
      return (<View>
            <Text>Config screen.</Text>
            <Text>Timestamp:{date}</Text>
            <Text>Professor:{professor}</Text>

            <Button
            title="REST CONFIG"
            onPress={() =>
               navigation.setParams({ dateTime: new Date(2021,0,1), professor:"Silvio" })
            }
            />

            <Text  onPress={() => {navigation.navigate("config",{})}}>
               Navigate
            </Text>
            <Text  onPress={() => {navigation.push("config",{})}}>
                PUSH config ...
            </Text>

            <Text  onPress={() => {navigation.push("main",{lastScreen:"config-push"})}}>
                PUSH ...
            </Text>

            <Text  onPress={() => {navigation.navigate("main",{lastScreen:"config"})}}>
               Navigate main
            </Text>

            <Text  onPress={() => {navigation.goBack()}}>
                Go back ...
            </Text>

            <Text  onPress={() => {navigation.pop()}}>
                POP ...
            </Text>


            <Text  onPress={() => {navigation.replace("main",{lastScreen:"config-replace"})}}>
                Replace ... 
            </Text>

            <Text  onPress={() => {navigation.popToTop()}}>
                Pop To Top 
            </Text>
            
            
            </View>);
        };
    

    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
         
          <Stack.Screen 
                name="main"
                component={MainScreen}
                options={{ title: 'Welcome' }}
              />
          <Stack.Screen name="config" component={ConfigScreen} options={{ title: 'Configuration APP' }} />
          <Stack.Screen name="product" component={ProductDetails} options={{ title: 'Product details:' }} />
          <Stack.Screen name="comments" component={ProductComments} options={{ title: 'Product comments:' }} />
         
          
          
        </Stack.Navigator>
      </NavigationContainer> 
    )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },


});
