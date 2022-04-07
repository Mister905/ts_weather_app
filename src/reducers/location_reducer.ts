import { string } from "yup";
import { Location_Action } from "../action_interfaces/location_interface";
import { Action_Type } from "../action_types";

interface I_initial_state {
  is_location_initialized: boolean;
  location: string | null;
  lat: number | null;
  lng: number | null;
}

// "si" = International System of Units (Système international d'unités, abbreviated SI)
// i.e. The modern international standard version of the metric system
// vs "us" - Imperial units

const initial_state: I_initial_state = {
  is_location_initialized: false,
  location: "",
  lat: null,
  lng: null,
};

export default function (
  state: I_initial_state = initial_state,
  action: Location_Action
): I_initial_state {
  switch (action.type) {
    case Action_Type.GET_LOCATION_WEATHER:
      return {
        ...state,
      };

    default:
      return state;
  }
}
