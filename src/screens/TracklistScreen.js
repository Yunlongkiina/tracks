import React, { useContext,useEffect } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity,Button } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { useNavigation } from '@react-navigation/native';

const TrackListScreen = () => {
  const { state, fetchTracks } = useContext(TrackContext);
  const navigation = useNavigation();
  navigation.removeListener
//   const isFocused = useIsFocused();
    console.log('state', state);
    
    useEffect(() => {
        fetchTracks();
    }, []);

    return (
    <>
      {/* <NavigationEvents onWillFocus={fetchTracks} /> */}
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button onPress={()=>fetchTracks() } title="Get Tracks"/>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackdetaileScreen", { _id: item._id })
              }
            >
                <Text style={{height:30,borderWidth:1,marginTop:10}}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
