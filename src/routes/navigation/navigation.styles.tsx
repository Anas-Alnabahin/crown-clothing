import styled from "styled-components";
import { Link } from "react-router-dom";

import { SpinnerContainer } from "../../components/spinner/spinner.styles";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const AuthSpinnerContainer = styled.div`
  cursor: default;
  padding: 10px 18.5px;
`;

export const AuthSpinner = styled(SpinnerContainer)`
  width: 25px;
  height: 25px;
`;

export const StyledSpan = styled.span`
  padding: 10px 15px;
  cursor: pointer;
`;
