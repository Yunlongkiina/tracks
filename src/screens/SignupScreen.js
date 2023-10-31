import React,{useState, useContext} from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
// import { Context as AuthContext} from "../context/AuthContext";
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";

const SignupScreen=()=>{
    const navigation = useNavigation();
    navigation.removeListener
    const { state, signup } = useContext(AuthContext);
    
    return(
        <View style={styles.container}>
            <AuthForm
                headerText= 'Sign Up for Tracker'
                errorMessage= {state.errorMessage}
                onSubmit= {signup}
                submitButtonText ='Sign Up'
            />
            <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')}>
                <Spacer>
                    <Text style={{color:'blue'}}>Already have account? Sign in instaed.</Text>
                </Spacer>
            </TouchableOpacity>
        </View>)
}

const styles = StyleSheet.create({
    container:{
        borderColor:'red',
        borderWidth:10,
        flex:1,
        justifyContent:'center',
        marginBottom:200

    }
});

export default SignupScreen;