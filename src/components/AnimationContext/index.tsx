import React, { useReducer, createContext } from "react";

interface AnimationProps {
  children: React.ReactNode;
}

interface State {
  isShowing: boolean;
  showHeaderIcon: boolean;
}

export const Actions = {
  ToggleShowing: "TOGGLESHOWING",
  ShowHeaderIcon: "SHOWHEADERICON",
} as const;

export type Actions = typeof Actions[keyof typeof Actions];

type Action = {
  type: Actions;
  payload: boolean;
};

const initialState: State = { isShowing: true, showHeaderIcon: false };
function animationReducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLESHOWING":
      return {
        ...state,
        isShowing: payload,
      };
    case "SHOWHEADERICON":
      return {
        ...state,
        showHeaderIcon: payload,
      };
    default:
      return state;
  }
}

export const AnimationStateContext = createContext(initialState);
export const AnimationDispatchContext = createContext<React.Dispatch<Action>>(() => null);

export default function Animation({ children }: AnimationProps) {
  const [state, dispatch] = useReducer(animationReducer, initialState);

  return (
    <AnimationStateContext.Provider value={state}>
      <AnimationDispatchContext.Provider value={dispatch}>
        {children}
      </AnimationDispatchContext.Provider>
    </AnimationStateContext.Provider>
  );
}
