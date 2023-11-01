import CreateDataContext from "./CreateDataContext";

const locationReducer=(state, action)=>{
    switch(action.type){
        case 'add_current_location':
            return {...state, currentLocation:action.payload}
        default:
            return state;
    }
}


const startRecording =dispatch=>()=>async ()=>{};
const stopRecording =dispatch=>()=>async ()=>{};
const addLocation =dispatch=>(location)=>{
    console.log('hi there!');
    dispatch({type:'add_current_location', payload:location})
};

export const {Context, Provider} = CreateDataContext(
    locationReducer,
    {startRecording, stopRecording,addLocation},
    {recording: false, locations:[],currentLocation:null}
)