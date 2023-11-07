import React,{ useContext }  from "react";
import {StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import { useIsFocused } from '@react-navigation/native';
import {ListItem} from 'react-native-elements';

const TracklistScreen=()=>{
    const {state, fetchTracks} = useContext(TrackContext);
    const isFocused = useIsFocused();

    return <>
    {isFocused?fetchTracks:null
    }

    <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
            return (
                <TouchableOpacity>
                <ListItem>
                    <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                </TouchableOpacity>
            );
            }}
        />

      </>
}

const styles = StyleSheet.create({
});

export default TracklistScreen;