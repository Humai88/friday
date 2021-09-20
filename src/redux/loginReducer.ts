const initialState: LoginInitialStateType = {};

export const loginReducer = (
  state = initialState,
  action: ActionLoginTypes
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
export type ActionLoginTypes = ReturnType<typeof AC>;
export type LoginInitialStateType = {};
