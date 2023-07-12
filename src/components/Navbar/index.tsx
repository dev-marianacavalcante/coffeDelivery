import {
  NavbarButton,
  NavbarButtonsContainer,
  NavbarContainer,
} from "./styles";
import coffeeLogoImg from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Navbar() {
  const { cartQuantity } = useCart();

  return (
    <NavbarContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <NavbarButtonsContainer>
          <NavbarButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </NavbarButton>
          <NavLink to="/completeOrder">
            <NavbarButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </NavbarButton>
          </NavLink>
        </NavbarButtonsContainer>
      </div>
    </NavbarContainer>
  );
}
