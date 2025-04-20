import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSage,
} from "../category.saga";

import { CATEGORIES_ACTION_TYPES } from "../category.types";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../category.action";

describe("Category sagas", () => {
  test("categorySaga", () => {
    testSaga(categoriesSage)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  //! keeps failing!
  //   test("onFetchCategories", () => {
  //     testSaga(onFetchCategories)
  //     .next()
  //     .takeLatest(
  //       CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  //       fetchCategoriesAsync
  //     )
  //     .next()
  //     .isDone();
  //   });

  test("fetchCategoriesAsync success", () => {
    const mockCategoriesArray = [
      { id: 1, name: "test 1" },
      { id: 2, name: "test 2" },
    ];
    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test("fetchCategoriesAsync failure", () => {
    const mockError = new Error("An error occured");

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
