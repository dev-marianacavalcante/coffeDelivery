import styled from "styled-components";

import { ShoppingCartSimple, MapPin } from '@phosphor-icons/react';


export const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
`;

export const GroupNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

`;

export const LogoImage = styled.img`
`;

export const LocationSpan = styled.span`
    width: 143px;
    height: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px;

    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    border-radius: 6px;
`;

export const ButtonBuy = styled.button`
    align-items: center;
    padding: 8px;
    gap: 4px;
    
    width: 38px;
    height: 38px;
    border-radius: 6px;
    border-width: 0px;

    background: ${props => props.theme["yellow-light"]};
`;

export const IconCart = styled(ShoppingCartSimple)`
    text-align:center;
    color: ${props => props.theme["yellow-dark"]};
`;

export const IconMap = styled(MapPin)`
    text-align:center;
    color: ${props => props.theme["purple-dark"]};

`;