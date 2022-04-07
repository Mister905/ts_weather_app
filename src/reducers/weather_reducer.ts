import { Weather_Action } from "../action_interfaces/weather_interface";
import { Action_Type } from "../action_types";

// interface I_pokemon {
//   id: number;
//   name: string;
//   url: string;
//   stats: [];
//   types: [];
//   weight: number;
//   image: string;
// }

interface I_initial_state {
  // loading_pokemon_list: boolean;
  // loading_pokemon_stats: boolean;
  // pokemon_list: (I_pokemon | undefined)[] | null;
}

const initial_state: I_initial_state = {
  // loading_pokemon_list: true,
  // loading_pokemon_stats: true,
  // pokemon_list: null,
};

export default function (
  state: I_initial_state = initial_state,
  action: Weather_Action
): I_initial_state {
  switch (action.type) {
    // case Action_Type.GET_POKEMON_LIST:
    //   return {
    //     ...state,
    //     loading_pokemon_list: false,
    //     pokemon_list: action.payload.pokemon_list,
    //   };

    default:
      return state;
  }
}
