import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayouts";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Confirm } from "./pages/Confirm";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Confirm" element={<Confirm />} />
            </Route>
        </Routes>
    )
}