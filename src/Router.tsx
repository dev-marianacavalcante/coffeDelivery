import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayouts";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/Home" element={<Home />} />
                <Route path="/Checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}