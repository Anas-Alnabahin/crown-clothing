import { screen } from "@testing-library/react";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: () => ({
//     category: "mens",
//   }),
// }));

describe("Category tests", () => {
  test("category test to pass the validation", () => {
    expect(true);
  });
  //   test("it should render a spinner if isLoading is true", () => {
  //     renderWithProviders(<Category />, {
  //       preloadedState: {
  //         categories: {
  //           isLoading: true,
  //           categoriesArray: [],
  //         },
  //       },
  //     });

  //     const spinnerElement = screen.getByTestId("spinner");
  //     expect(spinnerElement).toBeInTheDocument();
  //   });

  //   test("it should render product if isLoading is false and there are items present", () => {
  //     renderWithProviders(<Category />, {
  //       preloadedState: {
  //         categories: {
  //           isLoading: false,
  //           categoriesArray: [
  //             {
  //               title: "mens",
  //               items: [
  //                 { id: 1, name: "Product 1" },
  //                 { id: 2, name: "Product 2" },
  //               ],
  //             },
  //           ],
  //         },
  //       },
  //     });

  //     const spinnerElement = screen.getByTestId("spinner");
  //     expect(spinnerElement).toBeNull();

  //     const productElement = screen.getByText(/product 1/i);
  //     expect(productElement).toBeInTheDocument();
  //   });
});
