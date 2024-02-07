import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ContentHolder from "./ContentHolder";

const MainLayout = () => {
  return (
    <section>
      <Navbar />

      <ContentHolder>
        <Outlet />
      </ContentHolder>
    </section>
  );
};

export default MainLayout;
