
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import FilmCardOnePage from "../../pages/FilmCardOnePage/FilmCardOnePage";
import FilmCardPage from "../../pages/FilmCard/FilmCard";
import MyFavorite from "../../components/Myfavorite/MyFavorite";
import MyFavoritePage from "../../pages/MyfavoritePage/MyFavoritePage";

const PublickRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<FilmCardPage />} />
        <Route path="/filmCardOne/:id" element={<FilmCardOnePage />} />
        <Route path="/myFavorite" element={<MyFavoritePage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default PublickRouter;
