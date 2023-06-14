import { Content } from "../Home/components/CoffeeList/styles";
import { Form } from "./Components/Address";
import { CoffeeSelect } from "./Components/CoffeeCard";
import { PaymentSelect } from "./Components/PaymentSelect";
import { Container } from "./styles";

export function Checkout() {
    return(
        <Container>
            <Content>
                <Form/>
                <PaymentSelect/>
            </Content>
            <CoffeeSelect/>
        </Container>
    )
}