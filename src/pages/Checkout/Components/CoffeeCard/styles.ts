import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};

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
    left: 832px;
    top: 182px;

    background: ${props => props.theme["base-card"]};
    border-radius: 6px 44px;
`;

export const ContentCardAdd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 59px;

    width: 368px;
    height: 80px;

    background: ${props => props.theme["base-card"]};
`;

export const Image = styled.img`
    width: 64px;
    height: 64px;
`;

export const ContentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 171px;
    height: 61px;

`;

export const TitleItem = styled.p`
    font-weight: 400;
    font-size: 16px;

    display: flex;
    align-items: center;

    color: ${props => props.theme["base-subtitle"]};
`;
