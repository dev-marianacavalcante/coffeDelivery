import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Navbar } from "../../src/components/Navbar";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
    </LayoutContainer>
  );
}
