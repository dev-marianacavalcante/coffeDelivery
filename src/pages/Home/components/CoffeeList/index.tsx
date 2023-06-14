import { SelectedCoffesProps } from "../..";
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

export interface CoffeesProps {
    id: number;
    images: string,
    tags: string[],
    name: string,
    description: string,
    price: string
}

interface CoffeeListProps {
    coffees: CoffeesProps[],
    handleAddCoffee: (coffee: CoffeesProps) => void;
    handleRemoveCoffee: (coffee: CoffeesProps) => void;
    selectCoffees: SelectedCoffesProps[];
}

export function CoffeeList({coffees, handleAddCoffee, selectCoffees, handleRemoveCoffee}: CoffeeListProps) {
    return (
        <Container>
            <Title>Nossos Cafés</Title>
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
                                            <ButtonCounter onClick={() => handleAddCoffee(coffee)}>
                                                <IconPlus size={14}/>
                                            </ButtonCounter>
                                            <ButtonNumber>
                                                {
                                                    selectCoffees.find(item => item.id == coffee.id) ?
                                                    selectCoffees[selectCoffees.findIndex(item => item.id == coffee.id)].quantity :
                                                    0
                                                }
                                            </ButtonNumber>
                                            <ButtonCounter  onClick={() => handleRemoveCoffee(coffee)}>
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