import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 5em;
`;

export const ContentInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    
    width: 526px;
    height: 270px;
`;

export const Title = styled.p`
    color: ${props => props.theme["yellow-dark"]};
    font-weight: 800;
    font-size: 32px;
`;
export const Description = styled.p`
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 400;
    font-size: 20px;
`;
export const ContentOrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 526px;
    height: 270px;

    box-sizing: border-box;
    
    background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
`;
export const ContentAddress = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    color: ${props => props.theme["base-text"]};
`;
export const InfoRoad = styled.p`
    font-weight: 400;
    font-size: 16px;
`;
export const ContentDeliveryForecast = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    color: ${props => props.theme["base-text"]};
`;
export const TextDeliveryForecast = styled.p`
    
`;
export const ContentPayment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    color: ${props => props.theme["base-text"]};
`;
export const TextPayment = styled.p`
`;

export const IconMap = styled(MapPin)`
    background: ${props => props.theme.purple};
    color: ${props => props.theme.background};
    border-radius: 50px;
    padding: 5px;
`;
export const IconTimer = styled(Timer)`
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.background};  
    border-radius: 50px;
    padding: 5px;
`;
export const IconCurrency = styled(CurrencyDollar)`
    background: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.background};
    border-radius: 50px;
    padding: 5px;
`;
export const ContentImage = styled.div`
    display: flex;
    justify-content: flex-end;
    
`;
export const Image = styled.img`
padding-top:20%
`;