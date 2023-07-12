import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayouts";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/completeOrder";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<Checkout />} />
        <Route path="/Confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
