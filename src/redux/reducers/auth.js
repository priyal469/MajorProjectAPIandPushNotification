import types from "../types"


const initialState={
    userData:{},

}
    export default function authReducers(state=initialState,action){
        switch(action.type){
            
           case types.LOGIN:
               const userData={...action.payload};
               
               return{
                   ...state,
                   userData
               }
            default:
            return state
        }
     
      

        

   
};