import React,{useState, useEffect, useContext} from "react";
import * as Location from 'expo-location';

export default (shouldtrack, callback)=>{
    const [err, setErr] = useState(null);    
    const [subscriber, setSubscriber] = useState(null);

      useEffect(() => {
        let subscriber;
        const startWatching = async () => {
          try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
  
            // Subscribe to location updates from the device. Please note that updates will 
            //only occur while the application is in the foreground. To get location updates 
            //while in background you'll need to use Location.startLocationUpdatesAsync.
            const subscriber = await Location.watchPositionAsync(
              {
                accuracy:Location.Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
              },
              callback
              // (location) => {addLocation(location);}
            );  
          } catch (e) {
            setErr(e);
          }
        };

        if(shouldtrack){
            startWatching()
        }else{
          if(subscriber){
            subscriber.remove();
          }
          subscriber = null;
        }
        
        return()=>{
          if(subscriber){
            subscriber.remove();
          }
         }
  
       }, [shouldtrack, callback]);

    return [err]
}