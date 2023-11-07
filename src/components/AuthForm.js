import React,{useState} from "react";
import {Text, Button, Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Spacer from "./Spacer";
import { useNavigation } from '@react-navigation/native';

const AuthForm =({headerText, errorMessage,onSubmit,submitButtonText})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    navigation.removeListener

    return(
        <>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText = {setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText = {setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage? <Text>{errorMessage}</Text>: null}
            <Button title={submitButtonText} onPress={()=>onSubmit({email, password},()=>navigation.navigate('BottomScreen'))} />
        </Spacer>
        </>)
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

export default AuthForm;