import { 
    ButtonCredito,
    ButtonDebito,
    ButtonDinheiro,
    ContainerPayment,
    ContentIconTitle,
    ContentPay,
    ContentTitleDescription,
    IconCardBank,
    IconCardCredit,
    IconCurrency, 
    IconMoney, 
    TextDescription, 
    TextTitle
} from "./styles";

export function PaymentSelect() {
    return (
        <ContainerPayment>
                <ContentIconTitle>
                    <IconCurrency weight="regular" size={22}/>
                    <ContentTitleDescription>
                    <TextTitle>Pagamento</TextTitle>
                    <TextDescription>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextDescription>
                    </ContentTitleDescription>
                </ContentIconTitle>
                <ContentPay>
                    <ButtonCredito>
                        <IconCardCredit size={16}/>
                        Cartão de crédito
                    </ButtonCredito>
                    <ButtonDebito>
                        <IconCardBank size={16}/>
                        cartão de débito
                    </ButtonDebito>
                    <ButtonDinheiro>
                        <IconMoney size={16}/>
                        dinheiro
                    </ButtonDinheiro>
                </ContentPay>
            </ContainerPayment>
    )
}