import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategoriesArray = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray) =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
