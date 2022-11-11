import React, { Component } from "react";
import { View,TextInput,Button, StyleSheet } from "react-native";
import Icon from "react-native-fontawesome";


export default class Test extends Component
{
    
state = {isFocused:false};
onFocusChange = ()=>{
    this.setState({isFocused:true})
}



render()
{
   return(
    <View>
    <TextInput
       placeholder={this.props.name}
       onFocus={this.onFocusChange}
       inputContainerStyle={StyleSheet.inputContainer}
       inputStyle={styles.inputText}
       secureTextEntry={this.props.pass}
       leftIcon={
        <Icon
         icon={this.props.name}
         size={22}
         color={this.state.isFocused?'black':'grey'}
        
        />
       }        
      >

    </TextInput>
    
</View>
   )
}
};
const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        borderRadious:100,
        marginVertical:10,
        borderWidth:3.5
    
    },
    inputContainer:{
        borderBottomWidth:0
    },
    inputText:{
        color:'pink',
        fontWeight:'bold',
        marginLeft:5
    }
})