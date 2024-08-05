import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab=createMaterialTopTabNavigator()
const App = () => {
return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Log in' component={Login}/>
      <Tab.Screen name='Sign Up' component={SignUp}/>
    </Tab.Navigator>
     </NavigationContainer>
  )
}
const Login=()=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
    <Text style={{fontSize:25}}>LOG IN</Text>
  </View>
  )
}
const SignUp=()=>{
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text style={{fontSize:25}}>Sign up</Text>
    </View>
  )
}



export default App
