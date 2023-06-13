import { Form } from "./Components/Address";
import { CoffeeSelect } from "./Components/CoffeeCard";
import { PaymentSelect } from "./Components/PaymentSelect";

export function Checkout() {
    return(
        <>
            <Form/>
            <PaymentSelect/>
            <CoffeeSelect/>
        </>
    )
}