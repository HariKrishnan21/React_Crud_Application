import { combineReducers } from "redux";
import { userReducer } from "./employeeReducer";


const rootReducer=combineReducers({
    data:userReducer
})

export default rootReducer;