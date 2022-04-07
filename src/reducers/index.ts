import { combineReducers } from "redux";
import location_reducer from "./location_reducer";
import weather_reducer from "./weather_reducer";

const reducers = combineReducers({
  location: location_reducer,
  weather: weather_reducer,
});

export default reducers;
