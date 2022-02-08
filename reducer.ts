export type initialStateType = {
  darkmode: boolean;
};
export const initialState = {
  darkmode: false,
};
export type ActionType =
  | { type: "DARKMODE_ON"; text: string }
  | { type: "DARKMODE_OFF"; id: number };

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
