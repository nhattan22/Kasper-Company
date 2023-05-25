import LoginPage from "pages/LoginPage";
import NotFound from "pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
