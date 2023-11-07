import React,{useCallback, useContext} from "react";
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from "react-native";
import Map from '../components/Map';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from '@react-navigation/native';
import TrackForm from "../components/TrackForm";

const TrackCreateScreen=()=>{

  const {state: { recording }, addLocation} = useContext(LocationContext);
  // fix useEffect inside useLocation() refer to wrong state

  const callback = useCallback(
    location=>{
    addLocation(location, recording)
  }, [recording]);

  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused || recording, callback);

    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Map />
            {err? <Text>Please Enable your locaton on phone.</Text>:null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default TrackCreateScreen;