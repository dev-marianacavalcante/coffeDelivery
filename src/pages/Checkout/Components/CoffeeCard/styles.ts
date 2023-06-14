import { Minus, Plus, Trash } from "@phosphor-icons/react";
import styled from "styled-components";

const SameTextStyles = `
    font-weight: 400;
    line-height: 130%;
`;

const SameTextBoldStyles = `
    font-weight: 700;
    line-height: 130%;
`;

export const Container = styled.div`
    margin-top: 3em;
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 1em;

    display: flex;
    align-items: center;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 24px;

    width: 448px;
    height: 498px;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px 44px;

`;

export const ContentCardAdd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;

    height: 80px;

    background: ${props => props.theme["base-card"]};
`;

export const Image = styled.img`
    width: 64px;
    height: 64px;
`;

export const ContainerGroup = styled.div`
    display: flex;
`;

export const ContentDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
`;

export const TitleItem = styled.p`
    font-weight: 400;
    font-size: 16px;

    display: flex;
    align-items: center;

    color: ${props => props.theme["base-subtitle"]};
`;
export const Price = styled.p`
    font-weight: 700;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme["base-text"]};

`;

export const ContentTitlePrice = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: space-between;

    padding-bottom: 8px;
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
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 32px;

    background: ${props => props.theme["base-button"]};
    border-radius: 6px;

    box-sizing: border-box;
`;

export const ButtonCounter = styled.button`
    background: transparent;
    border-width: 0;
`;

export const SpanNumber = styled.span``;

export const IconPlus = styled(Plus)`
    color: ${props => props.theme.purple};
`;

export const IconMinus = styled(Minus)`
    color: ${props => props.theme.purple};
`;

export const ButtonRemove = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;

    width: 91px;
    height: 32px;

    background: ${props => props.theme["base-button"]};
    border-radius: 6px;
    border-width: 0;

    font-weight: 400;
    font-size: 12px;

    text-transform: uppercase;

    color: ${props => props.theme["base-text"]};
`;

export const IconTrash = styled(Trash)`
    color: ${props => props.theme.purple};
`;

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;

export const ContentTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
`;

export const Text = styled.span`
    ${SameTextStyles}

    font-size: 14px;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme["base-text"]};
`;

export const PriceTotal = styled.span`
    ${SameTextStyles}

    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme["base-text"]};
`;

export const TextBold = styled.span`
    ${SameTextBoldStyles}

    font-size: 20px;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme["base-text"]};
`;

export const PriceTotalBold = styled.span`
    ${SameTextBoldStyles}

    font-size: 20px;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme["base-text"]};
`;

export const ButtonConfirmOrder = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;

    background: ${props => props.theme.yellow};
    color: ${props => props.theme["white"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 6px;

    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
`;

export const Separator = styled.hr`
    height: 1px;
    border-width: 0;
    color: ${props => props.theme["base-button"]};;
    background-color: ${props => props.theme["base-button"]};
`;