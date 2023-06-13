import { 
    ButtonBuy,
    GroupNavbar,
    IconCart,
    IconMap,
    LocationSpan,
    LogoImage,
    NavbarContent
} from "./styles";

import Logo from '../../../../assets/Logo.svg'

export function Navbar() {
    return(
        
            <NavbarContent>
                <LogoImage src={Logo}/>
                <GroupNavbar>
                    <LocationSpan>
                        <IconMap weight="fill" size={22}/> 
                        Fortaleza, CE
                    </LocationSpan>
                    <ButtonBuy>
                        <IconCart weight="fill" size={22}/>
                    </ButtonBuy>
                </GroupNavbar>
            </NavbarContent>
    )
}