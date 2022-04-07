import { Action_Type } from "../action_types";

interface I_get_location_weather {
  type: Action_Type.GET_LOCATION_WEATHER;
  //   payload: I_get_pokemon_list_payload;
}

export type Location_Action = I_get_location_weather;
