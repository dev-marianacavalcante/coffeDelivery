import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayouts";
import { Home } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import { CompleteOrderPage } from "./pages/completeOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  );
}
