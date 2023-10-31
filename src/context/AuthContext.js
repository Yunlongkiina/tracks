import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker'
import { useNavigation } from '@react-navigation/native';

const authReducer=(state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.playload};
            case 'signup':
                return {errorMessage:'', token: action.playload};
    
            default:
            return state;
    }
}

const signup = (dispatch)=> async ({email, password}, callback)=>{
        try{
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data.token);

            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type: 'signup', payload:response.data.token})

            // navigate tom main flow
            callback()
        }catch(err){
            console.log(err);
            dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };

const signin =(dispatch)=>{
    return ({email, password})=>{
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

const signout =(dispatch)=>{
    return ({email, password})=>{
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

export const {Context, Provider} = CreateDataContext(
    authReducer,
    {signup,signin,signout},
    {isSignedIn: false, errorMessage:''},
)