import React,{useState, useContext} from "react";
import {View, StyleSheet, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
// import { Context as AuthContext} from "../context/AuthContext";
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen=()=>{
    const navigation = useNavigation();
    navigation.removeListener
    const { state, signup } = useContext(AuthContext);

    // const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
console.log(state);
    return(
        <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
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
            <Button title="Sign Up" onPress={()=>signup({email, password})} />
        </Spacer>
            {/* <Text style={{fontSize:48}}>SignupScreen</Text>
            <Button
                title="Goto Sign in Screen"
                onPress={()=>navigation.navigate('SigninScreen')}
            />
            <Button
                title="Goto BottomScreem Screen"
                onPress={()=>navigation.navigate('BottomScreen')}
            /> */}

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