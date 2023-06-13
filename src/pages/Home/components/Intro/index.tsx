import { 
    ContentTitles, 
    Subtitle, 
    Title, 
    Image, 
    IconPackage, 
    IconCart,
    IconCoffee, 
    IconTimer, 
    ContentItems,
    ContentImg,
    Container,
    ContentTitleImg,
    ContainerItems,
    ItemsLeft,
    ItemsRigth 
} from "./styles";

import image from '../../../../assets/Imagem.svg'

export function Intro() {
    return(
        <Container>
            <ContentTitleImg>
                <ContentTitles>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

                    <ContainerItems>
                        <ContentItems>
                            
                            <ItemsLeft>
                                <IconCart weight="fill"/>
                                Compra simples e segura
                            </ItemsLeft>
                            <ItemsRigth>
                                <IconPackage weight="fill"/>
                                Embalagem mantém o café intacto
                            </ItemsRigth>
                        </ContentItems>
                        <ContentItems>
                            <ItemsLeft>
                                <IconTimer weight="fill"/>
                                Entrega rápida e rastreada
                            </ItemsLeft>
                            <ItemsRigth>
                                <IconCoffee weight="fill"/>
                                O café chega fresquinho até você
                            </ItemsRigth>
                        </ContentItems>
                    </ContainerItems>
                </ContentTitles>

                <ContentImg>
                    <Image src={image}/>
                </ContentImg>
            </ContentTitleImg>
        </Container>
                
    )
}