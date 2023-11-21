import { combineReducers, legacy_createStore } from "redux";
import reducer from "./reducer";

export default function configStore(){
	return legacy_createStore(
		combineReducers({
			list: reducer
		})
	)
}