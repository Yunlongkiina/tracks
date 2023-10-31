import React,{useState, useContext} from "react";
import {Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacer from '../components/Spacer';

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