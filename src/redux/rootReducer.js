import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { loginReducer } from "./reducers/loginReducer";
import { newsReducer } from "./reducers/newReducer";
import { signalReducer } from "./reducers/signalReducer";
import { teachingReducer } from "./reducers/teachingReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    signal: signalReducer,
    teaching: teachingReducer,
    auth: authReducer,
    news: newsReducer
})