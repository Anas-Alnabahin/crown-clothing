import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
  selectCurrentUser,
  selectIsUserLoading,
} from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import CrwnLogo from "../../assets/crown.svg?react";

import {
  AuthSpinner,
  AuthSpinnerContainer,
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  StyledSpan,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isLoading = useSelector(selectIsUserLoading);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {isLoading ? (
            <AuthSpinnerContainer>
              <AuthSpinner />
            </AuthSpinnerContainer>
          ) : currentUser ? (
            <StyledSpan as="span" onClick={signOutUser}>
              Sign Out
            </StyledSpan>
          ) : (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
