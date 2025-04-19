import { screen } from "@testing-library/react";

import Navigation from "../navigation.component";

import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Navigation tests", () => {
  test("It should render a sign in link and not a Sign Out link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test("It should render Sign Out link and not Sign In link if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();
  });

  test("It should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropDownTextElement = screen.queryByText(/your cart is empty/i);
    expect(dropDownTextElement).toBeNull();
  });

  test("It should render a cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropDownTextElement = screen.getByText(/your cart is empty/i);
    expect(dropDownTextElement).toBeInTheDocument();
  });
});
