import { combineReducers } from "redux";
import weather_reducer from "./weather_reducer";

const reducers = combineReducers({
  weather: weather_reducer,
});

export default reducers;
