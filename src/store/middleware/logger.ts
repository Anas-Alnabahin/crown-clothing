import { Middleware, AnyAction, UnknownAction } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (isAnyAction(action)) {
      // if (!action.type) {
      //   return next(action);
      // }

      console.log("type: ", action.type);
      console.log("payload: ", action.payload);
      console.log("currentState: ", store.getState());

      next(action);

      console.log("next state: ", store.getState());
    }
  };

function isAnyAction(action: unknown): action is AnyAction {
  return typeof action === "object" && action !== null && "type" in action;
}
