import styled from "styled-components";
import {ShoppingCart, Plus, Minus} from '@phosphor-icons/react';


export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10rem;
    margin-bottom: 5rem;
`;


export const Title = styled.h2`
    font-weight: 800;
    font-size: 32px;

    margin-bottom: 1em;
`;

export const List = styled.div`
    display: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-content: space-between;
    flex-direction: column;
`;

export const ContainerCoffeeCard = styled.div`
    display: grid;
    margin: 0 auto;
    gap: 1rem;
    
    grid-row-gap: 40px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1150px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1430px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1620px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const CoffeeCard = styled.div`
    width: 236px;
    height: 310px;
    margin-top: 5%;
    border-radius: 6px 36px;
    padding: 20px;
    background: ${props => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Image = styled.img`
    height:120px;
    width: 120px;
    align-items: center;
    margin-top: -15%;
    margin-bottom: 5%;
`;
export const Content = styled.div`
`;

export const Tags = styled.span`
    
    align-items: center;
    padding: 4px 8px;

    width: 1px;
    height: 21px;
    border-radius: 100px;

    background: ${props => props.theme["yellow-light"]};

    font-weight: 700;
    font-size: 10px;
    color: ${props => props.theme["yellow-dark"]};

`;

export const Name = styled.p`
    padding-top: 12px;
    text-align: center;
    font-weight: 700;   
    font-size: 20px;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme["base-label"]};
    padding-top: 12px;
`;

export const ContentBuy = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;
export const BuyValue = styled.p`
    color: ${props => props.theme["base-text"]};
    font-size: 24px;
    font-weight: 800;
`;

export const BuValueRS = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

export const ContainerActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;
export const Counter = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    border-radius: 6px;
    background: ${props => props.theme["base-button"]};
`;
export const IconPlus = styled(Plus)``;

export const IconMinus = styled(Minus)``;

export const ButtonCounter = styled.button`
    color: ${props => props.theme.purple};
    background: transparent;
    border-width: 0;
`;
export const ButtonNumber = styled.span``;

export const ButtonBuy = styled.button`
    
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 38px;
    height: 38px;

    border-width: 0;
    border-radius: 6px;
    background: ${props => props.theme["purple-dark"]};

`;

export const IconCart = styled(ShoppingCart)`
    color: ${props => props.theme["base-card"]};
`;

