const initialState: RegisterInitialStateType = {};

export const registerReducer = (
  state = initialState,
  action: ActionRegisterTypes
): any => {
  switch (action.type) {
    case "ACTION_TYPE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const AC = () => {
  return {
    type: "ACTION_TYPE",
    payload: {},
  } as const;
};
// Types
export type ActionRegisterTypes = ReturnType<typeof AC>;
export type RegisterInitialStateType = {};
