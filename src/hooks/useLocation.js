import React,{useState, useEffect, useContext} from "react";
import * as Location from 'expo-location';

export default (shouldtrack, callback)=>{
    const [err, setErr] = useState(null);    
    const [subscriber, setSubscriber] = useState(null);    

    const startWatching = async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          // Subscribe to location updates from the device. Please note that updates will 
          //only occur while the application is in the foreground. To get location updates 
          //while in background you'll need to use Location.startLocationUpdatesAsync.
          const sub = await Location.watchPositionAsync(
            {
              accuracy:Location.Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval:10
            },
            callback
            // (location) => {addLocation(location);}
          );
    
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          setSubscriber(sub)
        } catch (e) {
          setErr(e);
        }
      };

      useEffect(() => {
        if(shouldtrack){
            startWatching()
            console.log('shouldtrack');
        }else{
            console.log('not      shouldtrack');
            setSubscriber(null)
        }
       }, [shouldtrack]);

    return [err]
}