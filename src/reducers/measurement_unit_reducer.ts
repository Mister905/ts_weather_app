import { string } from "yup";
import { Measurement_Unit_Action } from "../action_interfaces/measurement_unit_interface";
import { Action_Type } from "../action_types";

interface I_initial_state {
  measurement_unit: string;
}

// "si" = International System of Units (Système international d'unités, abbreviated SI)
// i.e. The modern international standard version of the metric system
// vs "us" - Imperial units

const initial_state: I_initial_state = {
  measurement_unit: "si",
};

export default function (
  state: I_initial_state = initial_state,
  action: Measurement_Unit_Action
): I_initial_state {
  switch (action.type) {
    case Action_Type.UPDATE_MEASUREMENT_UNIT:
      return {
        ...state,
      };

    default:
      return state;
  }
}
