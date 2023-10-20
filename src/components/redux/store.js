import changeNumber from "./Reducers/reducer";
import { combineReducers,createStore } from "redux";

const rootReducer = combineReducers({
    changeNumber
})

const store = createStore(rootReducer);

export default store;

