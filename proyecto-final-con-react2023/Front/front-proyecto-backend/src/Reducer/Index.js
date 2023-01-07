import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//IMPORTAR REDUCER

const rootReducer = combineReducers({
    routing: routerReducer,
    //DECLARO LOS REDUCERS
})

export default rootReducer;