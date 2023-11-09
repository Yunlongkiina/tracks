import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
// import { navigate } from '../navigationRef';
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();
// navigation.removeListener


export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    // navigate to  TrackList screen.
    // navigate('TrackList');
  };

  return [saveTrack];
};
