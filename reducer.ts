export type initialStateType = {
  darkmode: boolean;
};
export const initialState = {
  darkmode: false,
};
export type ActionType = { type: "DARKMODE_ON" } | { type: "DARKMODE_OFF" };

export const reducer = (state: initialStateType, action: ActionType) => {
  switch (action.type) {
    case "DARKMODE_ON":
      return { ...state, darkmode: true };

    case "DARKMODE_OFF":
      return { ...state, darkmode: false };
    default:
      return state;
  }
};
