// import '../_mockLocation';
import React,{useState, useCallback, useContext} from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from "react-native";
import Map from '../components/Map';
import * as Location from 'expo-location';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import TrackForm from "../components/TrackForm";

const TrackCreateScreen=()=>{

  const {state: { recording }, addLocation} = useContext(LocationContext);
  // fix useEffect inside useLocation() refer to wrong state
  
  const callback = useCallback(
    location=>{
    addLocation(location, recording)
  }, [recording]);

  const isFocused = useIsFocused();
  console.log(recording);
//  const [focused, setFocused] = useState(true);
  const [err] = useLocation(isFocused || recording, callback);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused
  //     setFocused(true)
  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //       setFocused(false)
  //     };
  //   }, [])
  // );


    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Map />
            {err? <Text>Please Enable your locaton on phone.</Text>:null}
            {/* <TrackForm /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default TrackCreateScreen;