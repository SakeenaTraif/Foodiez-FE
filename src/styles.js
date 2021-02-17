import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
margin:35px;
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
  font-size: 20px;
`;

export const FoodiesImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: gold;
`;

export const NavRecipies = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;

  &.active {
    color: ${(props) => props.theme.pink};
  }
`;

export const NavCategories = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;
  &.active {
    color: ${(props) => props.theme.red} !important;
  }
`;