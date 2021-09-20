const initialState: AuthInitialStateType = {};

export const forgotReducer = (
  state = initialState,
  action: ActionAuthTypes
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
export type ActionAuthTypes = ReturnType<typeof AC>;
export type AuthInitialStateType = {};
