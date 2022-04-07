import { Action_Type } from "../action_types";

interface I_update_measurement_unit {
  type: Action_Type.UPDATE_MEASUREMENT_UNIT;
}

export type Measurement_Unit_Action = I_update_measurement_unit;
