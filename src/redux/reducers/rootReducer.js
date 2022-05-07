import { combineReducers } from "redux";
import settingReducer from './settingReducer'

const rootReducer = combineReducers({
    setting: settingReducer
})

export default rootReducer