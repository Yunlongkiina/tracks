import React,{useState, useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen=()=>{
    const navigation = useNavigation();
    navigation.removeListener

    return(
        <>
            <Text style={{fontSize:48}}>SignupScreen</Text>
            <Button
                title="Goto Sign in Screen"
                onPress={()=>navigation.navigate('SigninScreen')}
            />
            <Button
                title="Goto BottomScreem Screen"
                onPress={()=>navigation.navigate('BottomScreen')}
            />

        </>)
}

const styles = StyleSheet.create({
});

export default SignupScreen;