import {
  selectCategoriesArray,
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../category.selector";

const mockState = {
  categories: {
    isLoading: false,
    categoriesArray: [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "product 1" },
          { id: 2, name: "product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test2",
        items: [
          { id: 3, name: "product 3" },
          { id: 4, name: "product 4" },
        ],
      },
    ],
  },
};

describe("Category selectors", () => {
  test("selectCategoriesArray should return the categories data", () => {
    const CategoriesSlice = selectCategoriesArray(mockState);
    expect(CategoriesSlice).toEqual(mockState.categories.categoriesArray);
  });

  test("selectCategoriesIsLoading should return isLoading state", () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(false);
  });

  test("selectCateogoriesMap should convert the items array into the appropriate map", () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
      ],
      womens: [
        { id: 3, name: "product 3" },
        { id: 4, name: "product 4" },
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
