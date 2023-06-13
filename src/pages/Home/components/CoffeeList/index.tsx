import {
    CoffeeCard,
    Container,
    List,
    Title,
    Tags,
    Image,
    Name,
    Description,
    BuyValue,
    Counter,
    ButtonBuy,
    ContentBuy,
    Content,
    IconCart,
    ButtonNumber,
    ButtonCounter,
    IconPlus,
    IconMinus,
    ContainerActions,
    BuValueRS,
    ContainerCoffeeCard,
} from "./styles";

interface CoffeesProps {
    images: string,
    tags: string[],
    name: string,
    description: string,
    price: string
}

interface CoffeeListProps {
    coffees: CoffeesProps[]
}

export function CoffeeList({coffees}: CoffeeListProps) {
    return (
        <Container>
            <Title>Nossos cafés</Title>
            <ContainerCoffeeCard>

                {
                    coffees.map(coffee => {
                        return (

                            <CoffeeCard>

                                <List>
                                    <Image src={coffee.images} alt='cafe tradicional'/>
                                    <Content>
                                        {
                                            coffee.tags.map(tag => <Tags>{tag}</Tags>)
                                        }
                                        
                                        <Name>{coffee.name}</Name>
                                        <Description>{coffee.description}</Description>
                                    </Content>
                                </List>

                                <ContentBuy>
                                    <BuyValue>
                                        <BuValueRS>
                                            R$
                                        </BuValueRS>
                                        {coffee.price}
                                    </BuyValue>

                                    <ContainerActions>
                                        <Counter>
                                            <ButtonCounter>
                                                <IconPlus size={14}/>
                                            </ButtonCounter>
                                            <ButtonNumber>0</ButtonNumber>
                                            <ButtonCounter>
                                                <IconMinus size={14}/>
                                            </ButtonCounter>
                                        </Counter>
                                        <ButtonBuy>
                                            <IconCart weight="fill" size={19}/>
                                        </ButtonBuy>
                                    </ContainerActions>
                                </ContentBuy>
                            </CoffeeCard>
                        )
                    })
                }
            
            </ContainerCoffeeCard>
        </Container>
    )
}