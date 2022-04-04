import { Dispatch } from "redux";
import { Weather_Action } from "../action_interfaces/weather_interface";
import { Action_Type } from "../action_types";
import { History } from "history";
import axios from "axios";

interface I_pokemon {
  id: number;
  name: string;
  url: string;
  stats: [];
  types: [];
  weight: number;
  image: string;
}

// export const get_pokemon_list =
//   () => async (dispatch: Dispatch<Pokemon_Action>) => {
//     try {
//       const res = await axios.get(
//         "https://pokeapi.co/api/v2/pokemon?limit=151"
//       );

//       dispatch({
//         type: Action_Type.GET_POKEMON_LIST,
//         payload: { pokemon_list: res.data.results },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
