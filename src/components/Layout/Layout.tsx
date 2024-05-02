import Header from "../Header";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

function Layout() {
  return (
    <>
      <Header />
      <PrivateRoute isLoggedIn={false} />
      <Footer />
    </>
  );
}

export default Layout;
