import {
    Container,
    ContentAddress,
    ContentDeliveryForecast,
    ContentInfos,
    ContentOrderInfo,
    ContentPayment,
    Description,
    IconCurrency,
    IconMap,
    IconTimer,
    InfoRoad,
    TextDeliveryForecast,
    TextPayment,
    Title,
    Image,
    ContentImage
}
from
"./styles";

import Illustration from '../../assets/Illustration.svg'

export function Confirm() {
    return(
        <Container>
            <ContentInfos>
                <Title>Uhu! Pedido confirmado</Title>
                <Description>Agora é só aguardar que logo o café chegará até você</Description>

                <ContentOrderInfo>
                    <ContentAddress>
                        <IconMap size={16} weight="fill"/>
                        <InfoRoad>
                            Entrega em <strong> Rua João Daniel Martinelli, 102</strong><br /> 
                            Farrapos - Porto Alegre, RS
                        </InfoRoad>
                    </ContentAddress>
                    <ContentDeliveryForecast>
                        <IconTimer size={16} weight="fill"/>
                        <TextDeliveryForecast>
                            Previsão de entrega <br /> 
                            <strong> 20 min - 30 min </strong>
                        </TextDeliveryForecast>
                    </ContentDeliveryForecast>
                    <ContentPayment>
                        <IconCurrency size={16} weight="regular"/>
                        <TextPayment>
                            Pagamento na entrega <br /> 
                            <strong> Cartão de Crédito</strong>
                        </TextPayment>
                    </ContentPayment>
                </ContentOrderInfo>
            </ContentInfos>
            <ContentImage>
                <Image src={Illustration}/>
            </ContentImage>
        </Container>
    )
}