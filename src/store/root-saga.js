import { all, call } from "redux-saga/effects";

import { categoriesSage } from "./categories/category.saga";
import { userSaga } from "./user/user.saga";

export function* rootSage() {
  yield all([call(categoriesSage), call(userSaga)]);
}
