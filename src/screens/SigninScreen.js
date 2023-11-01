import React,{useState, useContext} from "react";
import {Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../components/Spacer';
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationContext } from '@react-navigation/native';

const SigninScreen=()=>{
    const navigation = useNavigation();
    navigation.removeListener
    const { state, signin } = useContext(AuthContext);

    return(
        <>
            <AuthForm
                headerText= 'Sign In for Tracker'
                errorMessage= {state.errorMessage}
                onSubmit= {signin}
                submitButtonText ='Sign In'
            />

            <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
                <Spacer>
                    <Text style={{color:'blue'}}>Don't have account? Goto Sign up page.</Text>
                </Spacer>
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
});

export default SigninScreen;