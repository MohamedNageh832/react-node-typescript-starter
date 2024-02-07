import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RenderRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<RenderRoutes />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
