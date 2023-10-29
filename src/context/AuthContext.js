import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker'

const authReducer=(state, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

const singnup = (dispatch)=>{
    return async ({email, password})=>{
        try{
            const response = await trackerApi.post('signup', {email, password})
        }catch(err){
            console.log(err);
        }
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

const singnin =(dispatch)=>{
    return ({email, password})=>{
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

const singnout =(dispatch)=>{
    return ({email, password})=>{
        // make api request to sign up 

        // if signup, modify our state,and say we are authenticated
    };
}

export const {Context, Provider} = CreateDataContext(
    authReducer,
    {singnup,singnin,singnout},
    {isSignedIn: false},
)