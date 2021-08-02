import { combineReducers } from "redux";
import getLocationReducer from "./getLocationReducer";
import searchLocationReducer from "./searchLocationReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    getLocation: getLocationReducer,
    searchLocation: searchLocationReducer,
    theme: themeReducer
})

export default rootReducer