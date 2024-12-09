import { all, call } from "redux-saga/effects";

import { categoriesSage } from "./categories/category.saga";

export function* rootSage() {
  yield all([call(categoriesSage)]);
}
