import { Dispatch } from "redux";
import { Location_Action } from "../action_interfaces/location_interface";
import { Action_Type } from "../action_types";
import { History } from "history";
import axios from "axios";

export const get_location_weather =
  () => async (dispatch: Dispatch<Location_Action>) => {
    try {

      
      // const res = await axios.get(
      //   "https://pokeapi.co/api/v2/pokemon?limit=151"
      // );

      // dispatch({
      //   type: Action_Type.GET_POKEMON_LIST,
      //   payload: { pokemon_list: res.data.results },
      // });
    } catch (error) {
      console.log(error);
    }
  };
