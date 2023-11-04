// import '../_mockLocation';
import React,{useState, useEffect, useContext} from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from "react-native";
import Map from '../components/Map';
import * as Location from 'expo-location';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect } from '@react-navigation/native';

const TrackCreateScreen=()=>{
  const {addLocation} = useContext(LocationContext);
  const [focused, setFocused] = useState(false);
  const [err] = useLocation(focused, addLocation);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setFocused(true)
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setFocused(false)
      };
    }, [])
  );


    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Map />
            {err? <Text>Please Enable your locaton on phone.</Text>:null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default TrackCreateScreen;