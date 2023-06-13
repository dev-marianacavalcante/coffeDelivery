import { Container, ContainerCard, ContentCardAdd, Title, Image, ContentDetails, TitleItem } from "./styles";

export function CoffeeSelect() {
    return (
        <Container>
            <Title>
            Cafés selecionados
            </Title>

            <ContainerCard>
                <ContentCardAdd>
                    <ContentDetails>
                    <Image/>
                        <TitleItem>Expresso Tradicional</TitleItem>
                    </ContentDetails>

                </ContentCardAdd>
            </ContainerCard>
        </Container>
    )
}