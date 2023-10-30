import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker'

const authReducer=(state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.playload};
        default:
            return state;
    }
}

const signup = (dispatch)=>{
    return async ({email, password})=>{
        try{
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data);
        }catch(err){
            console.log(err);
            dispatch({type: 'add_error', playload:'Something went wrong!'})
        }
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

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