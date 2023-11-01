// import '../_mockLocation';
import React,{useState, useEffect, useContext} from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from "react-native";
import Map from '../components/Map';
import * as Location from 'expo-location';
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen=()=>{
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        // Subscribe to location updates from the device. Please note that updates will 
        //only occur while the application is in the foreground. To get location updates 
        //while in background you'll need to use Location.startLocationUpdatesAsync.
        await Location.watchPositionAsync(
          {
            accuracy:Location.Accuracy.BestForNavigation,
            timeInterval:1000,
            distanceInterval:10
          },
          (location) => {addLocation(location);}
        );

        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

      } catch (e) {
        setErr(e);
      }
    };
    useEffect(() => {startWatching()}, []);
    

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