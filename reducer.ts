export type initialStateType = {
  darkmode: boolean;
};
export const initialState = {
  darkmode: false,
};
export type ActionType =
  | { type: "DARKMODE_ON" }
  | { type: "DARKMODE_OFF" }
  | { type: "TEST" };
export const reducer = (state: initialStateType, action: ActionType) => {
  switch (action.type) {
    case "DARKMODE_ON":
      return { ...state, darkmode: true };

    case "DARKMODE_OFF":
      return { ...state, darkmode: false };
    case "TEST":
      console.log("Hello From reducer");
      return state;
    default:
      return state;
  }
};
