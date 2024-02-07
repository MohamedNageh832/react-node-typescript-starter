import { APP_ROUTES } from "@/constants";
import { MainLayout } from "@/layout";
import { ChatRooms, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path={APP_ROUTES.get.HOME} element={<Home />} />
        <Route path={APP_ROUTES.get.CHAT_ROOMS} element={<ChatRooms />} />
      </Route>
    </Routes>
  );
};

export default RenderRoutes;
