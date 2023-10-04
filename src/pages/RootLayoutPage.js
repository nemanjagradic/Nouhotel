import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/Main Navigation/MainNavigation";
import Footer from "../components/Layout/Footer/Footer";

function RootLayoutPage() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayoutPage;
