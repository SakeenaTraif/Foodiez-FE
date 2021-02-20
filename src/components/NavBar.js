import { Logo, NavRecipies,NavCategories,NavStyled } from "../styles";

import foodiesLogo from "../images/Foodiez-logo.png";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
          <img src= {foodiesLogo} alt="Logo"/>
      </Logo>
      <div className="navbar-nav ml-auto">
      <NavCategories className="nav-item nav-link" to="/categories">
            Categories
          </NavCategories>
        <NavRecipies className="nav-item nav-link" to="/recipes">
          Recipies
        </NavRecipies>
      </div>
    </NavStyled>
  );
};

export default NavBar;
