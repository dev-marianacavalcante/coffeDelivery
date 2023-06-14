import { 
    ButtonBuy,
    CartCounter,
    GroupNavbar,
    IconCart,
    IconMap,
    LocationSpan,
    LogoImage,
    NavbarContent
} from "./styles";

import Logo from '../../../../assets/Logo.svg'
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        
            <NavbarContent>
                <LogoImage src={Logo}/>
                <GroupNavbar>
                    <LocationSpan>
                        <IconMap weight="fill" size={22}/> 
                        Fortaleza, CE
                    </LocationSpan>
                    <Link to={'/Checkout'}>
                        <ButtonBuy>
                            <IconCart weight="fill" size={22}/>
                            <CartCounter>1</CartCounter>
                        </ButtonBuy>
                    </Link>
                </GroupNavbar>
            </NavbarContent>
    )
}