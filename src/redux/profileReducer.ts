const initialState: ProfileInitialStateType = {};

export const authReducer = (
  state = initialState,
  action: ActionProfileTypes
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
export type ActionProfileTypes = ReturnType<typeof AC>;
export type ProfileInitialStateType = {};
