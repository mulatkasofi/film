import MainLayout from "../../layouts/Auth/MainLayout";
import Header from "../../components/Header/Header";
import FilmCardOne from "../../components/FilmCardOne/FilmCardOne";
import Filter from "../../components/Filter/Filter";
import MyFavorite from "../../components/Myfavorite/MyFavorite";

const MyFavoritePage = () => {
  return (
    <MainLayout
      header={<Header name={"S"} shortName={"Sofi"} />}
      content={<MyFavorite />}
      footer={<></>}
    />
  );
};

export default MyFavoritePage;
