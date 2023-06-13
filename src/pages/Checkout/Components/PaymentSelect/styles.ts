import styled from "styled-components";
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';


//Payment

export const ContainerPayment = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    width: 640px;
    height: 207px;
    padding: 2.5em;
    box-sizing: border-box;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px;
`;

export const ContentPay = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 32px;
`;
export const IconCurrency = styled(CurrencyDollar)`
    color: ${props => props.theme.purple};
`;
export const TextTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.theme["base-subtitle"]};
`;

export const TextDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme["base-text"]};
`;
export const ContentIconTitle = styled.div`
    display: flex;
`;
export const ContentTitleDescription = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ButtonCredito = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;

    width: 178.67px;
    height: 51px;

    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 6px;

    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
`;

export const IconCardCredit = styled(CreditCard)`
    color: ${props => props.theme.purple};
`;

export const ButtonDebito = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;

    width: 178.67px;
    height: 51px;

    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 6px;

    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
`;
export const IconCardBank = styled(Bank)`
    color: ${props => props.theme.purple};
`;
export const ButtonDinheiro = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;

    width: 178.67px;
    height: 51px;

    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 6px;

    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
`;
export const IconMoney = styled(Money)`
    color: ${props => props.theme.purple};
`;