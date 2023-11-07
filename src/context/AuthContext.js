import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker'

const authReducer=(state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.playload};
            case 'signin':
                return {errorMessage:'', token: action.playload};
            case 'clear_error_message':
                return {...state, errorMessage: ''};
            case 'signout':
                return {token:'', errorMessage: ''};

            default:
            return state;
    }
}
const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("TrackList");
    } else {
      navigate("Signup");
    }
  };

  
const clearErrorMessage = dispatch=>()=>{dispatch({type:'clear_error_message'})};
const signup = (dispatch)=> async ({email, password}, callback)=>{
        try{
            const response = await trackerApi.post('/signup', {email, password})

            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type: 'signin', payload:response.data.token})

            // navigate tom main flow
            callback()
        }catch(err){
            dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };

const signin =(dispatch)=> async ({email, password},callback)=>{
        // make api request to sign up 
        try{
            const response = await trackerApi.post('/signin', {email, password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type: 'signin', payload:response.data.token})
            callback();
        }catch(error){
            dispatch({type: 'add_error', playload:'Something went wrong with sign in!'})

        }
        // if signup, modify our state,and say we are authenticated
    };

const signout =dispatch=>()=>async ()=>{
        // make api request to sign up 
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
        // if signup, modify our state,and say we are authenticated
    };

export const {Context, Provider} = CreateDataContext(
    authReducer,
    {signup,signin,signout,clearErrorMessage,signout,tryLocalSignin},
    {isSignedIn: false, errorMessage:''},
)