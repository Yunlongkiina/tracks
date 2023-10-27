import React,{useState, useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SigninScreen=()=>{
    const navigation = useNavigation();
    navigation.removeListener

    return(
        <>
            <Text style={{fontSize:48}}>SigninScreen</Text>
            <Button
                title="Goto signUp Screen"
                onPress={()=>navigation.navigate('SignupScreen')}
            />
        </>
    )
}

const styles = StyleSheet.create({
});

export default SigninScreen;