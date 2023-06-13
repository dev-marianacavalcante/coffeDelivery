import { 
    Description,
    Frame,
    IconMapPin,
    Subtitle,
    Title,
    FormAddress,
    InputMd,
    InputXg,
    InputLg, 
    InputSm,
    ContainerInfo,
    ContainerIconSubtitle,
    ContainerText,
    Container,
} from "./styles";

export function Form() {

    return (
        <Container>
            <Title>Complete seu pedido</Title>

            <FormAddress>
                <Frame>
                    <ContainerIconSubtitle>
                        <IconMapPin size={22}/>
                        <ContainerText>
                            <Subtitle>
                                Endereco de Entrega
                            </Subtitle>
                            <Description>Informe o endereço onde deseja receber seu pedido</Description>
                        </ContainerText>
                    </ContainerIconSubtitle>
                </Frame>
                    
                        <InputMd placeholder="CEP" maxLength={8}/>
                        <InputXg placeholder="Rua" />
                        <ContainerInfo>
                            <InputMd placeholder="Numero" type="Number"/>
                            <InputLg placeholder="Complemento"/>
                        </ContainerInfo>
                        <ContainerInfo>
                        <InputMd placeholder="Bairro"/>
                        <InputLg placeholder="Cidade"/>
                        <InputSm placeholder="UF"/>
                        </ContainerInfo>
            </FormAddress>
        </Container>
        
    )
}