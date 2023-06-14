import {
    Container,
    ContainerCard,
    ContentCardAdd,
    Title,
    Image,
    ContentDetails,
    TitleItem,
    ContainerActions,
    Counter,
    ButtonCounter,
    SpanNumber,
    IconPlus,
    IconMinus,
    ButtonRemove,
    IconTrash,
    Price,
    ContentTitlePrice,
    ContainerDetails,
    ContentTotal,
    PriceTotal,
    Text,
    TextBold,
    PriceTotalBold,
    ButtonConfirmOrder,
    ContainerGroup,
    Separator,
} from "./styles";
import CoffeeSvg from '../../../../assets/Coffee.svg';

export function CoffeeSelect() {
    return (
        <Container>
            <Title>Cafés selecionados</Title>

            <ContainerCard>
                <ContentCardAdd>
                    <ContainerGroup>
                        <Image src={CoffeeSvg}/>
                        <ContentDetails>
                            <ContentTitlePrice>
                                <TitleItem>Expresso Tradicional</TitleItem>
                            </ContentTitlePrice>
                            <ContainerActions>
                                <Counter>
                                    <ButtonCounter>
                                        <IconPlus size={11}/>
                                    </ButtonCounter>
                                    <SpanNumber>0</SpanNumber>
                                    <ButtonCounter>
                                        <IconMinus size={11}/>
                                    </ButtonCounter>
                                </Counter>
                                <ButtonRemove><IconTrash weight="regular" size={14}/> Remover</ButtonRemove>
                            </ContainerActions>
                        </ContentDetails>
                    </ContainerGroup>
                    <Price>R$ 9,90</Price>
                </ContentCardAdd>

                <Separator/>

                <ContainerDetails>
                    <>
                        <ContentTotal>
                            <Text>Total de itens</Text>
                            <PriceTotal>R$ 29,70</PriceTotal>
                        </ContentTotal>
                        <ContentTotal>
                            <Text>Entrega</Text>
                            <PriceTotal>R$ 3,90</PriceTotal>
                        </ContentTotal>
                        <ContentTotal>
                            <TextBold>Total</TextBold>
                            <PriceTotalBold>R$ 33,20</PriceTotalBold>
                        </ContentTotal>
                    </>
                    <ButtonConfirmOrder>
                        Confirmar Pedido
                    </ButtonConfirmOrder>
                </ContainerDetails>
            </ContainerCard>
        </Container>
    )
}