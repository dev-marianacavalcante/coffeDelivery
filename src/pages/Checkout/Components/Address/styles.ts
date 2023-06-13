import styled from "styled-components";
import { MapPin } from '@phosphor-icons/react';

export const Container = styled.div`
    margin-top: 3em;
`;
export const FormAddress = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 16px;

    width: 640px;
    height: 372px;

    border-radius: 6px;
    background: ${props => props.theme["base-card"]};
    box-sizing: border-box;
`;

export const ContainerInfo = styled.div`
    display: flex;
    gap: 12px;
`

export const InputSm = styled.input`
    display: flex;

    width: 2.5em;
    height: 2.5em;
    padding-left: 12px;

    
    color: ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-button"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 4px;
`;

export const InputMd = styled.input`
    display: flex;
    gap: 4px;
    padding-left: 12px;


    width: 200px;
    height: 2.5em;
    
    color: ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-button"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 4px;
`;

export const InputLg = styled.input`
    display: flex;
    padding-left: 12px;

    width: 348px;
    height: 2.5em;
    
    color: ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-button"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 4px;
`;

export const InputXg = styled.input`
    display: flex;
    padding-left: 12px;
    

    width: 34em;
    height: 2.5em;

    color: ${props => props.theme["base-label"]};
    background: ${props => props.theme["base-button"]};
    border: 1px solid ${props => props.theme["base-input"]};
    border-radius: 4px;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 1em;
`;

export const Frame = styled.div`
`;

export const ContainerIconSubtitle = styled.div`
    display: flex;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
`;
export const IconMapPin = styled(MapPin)`
    color: ${props => props.theme["yellow-dark"]};
`;
export const Subtitle = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme["base-subtitle"]};
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${props => props.theme["base-text"]};
`;



