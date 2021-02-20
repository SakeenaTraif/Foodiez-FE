import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
margin-top:45px;
text-align: center;
font-family:  Agency FB ;
font-size:70px;
padding-top:35px;
`;

export const Description = styled.h4`
  text-align: center;
  font-size: 16px;
  color:darkblue;
  font-family:  serif ;
  
`;

export const FoodiesImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top:0;
`;

export const Logo = styled(Link)`
  img {
    width: 5rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: gold;
  font-weight: normal;
  margin:20px;
  
`;

export const NavRecipies = styled(NavLink)`
  color: darkblue;
  font-family:  serif;
  padding: 0.25em 1em;

  &.active {
    color: red};
  }
`;

export const NavCategories = styled(NavLink)`
  color: darkblue;
  font-family:  serif ;
  padding: 0.25em 1em;
  &.active {
    color: red !important;
  }
`;

export const ItemWrapper = styled.div`
display: inline-block; 
pandding:50px;
margin-left:57px;
margin-rigtt:50px;
text-align: center;


  img {
    width: 8em;
    height: 8em;
    
  }

  p {
    &.Ingredient-name {
      color: black;}
    }
`;

export  const AddItem = styled.div`
pandding:20px;
margin: 50px;
margin-left:25%;

}
`;

export  const AddRecipe = styled.div`
pandding:7px;
margin: 50px;
margin-left:7%;
color:red;

`;

export  const Add = styled.div`
margin-top: 30px;


}
`;