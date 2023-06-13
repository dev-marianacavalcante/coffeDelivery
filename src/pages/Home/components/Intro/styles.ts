import styled from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';


export const Container = styled.div`
    
`;
export const ContentTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 50%;
    height: 192px;
    
`;
export const Title = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
`;

export const Subtitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
`;
export const ContentImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const ContentTitleImg = styled.div`
    display: flex;
    margin-top: 83px;
    flex-direction: row;
    justify-content: space-between;    
`;
export const Image = styled.img``;

export const ContentItems = styled.div`
    display: flex;

`;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 4em;
`;
export const ItemsLeft =  styled.p`
    display: flex;
    align-items: center;
    gap: 12px;
    padding:  12px 0;
`;

export const ItemsRigth =  styled.p`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left:15px;
    padding-top: 12px;
    padding-bottom: 12px ;
`;

export const IconCart = styled(ShoppingCart)`
    background: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.background};
    align-items: center;
    padding: 8px;
    border-radius: 100%;
`;
export const IconPackage = styled(Package)`
    background: ${props => props.theme["base-text"]};
    color: ${props => props.theme.background};

    text-align:center;
    padding: 8px;
    border-radius: 100%;
`

export const IconTimer = styled(Timer)`
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.background};

    text-align:center;
    padding: 8px;
    border-radius: 100%;
`;
export const IconCoffee = styled(Coffee)`
    background: ${props => props.theme["purple"]};
    color: ${props => props.theme.background};

    text-align:center;
    padding: 8px;
    border-radius: 100%;
`;

