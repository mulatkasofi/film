import MainLayout from "../../layouts/Auth/MainLayout";
import Header from "../../components/Header/Header";
import FilmCardOne from "../../components/FilmCardOne/FilmCardOne";
import Filter from "../../components/Filter/Filter";
import FilmList from "../../components/FilmList/FilmList";

const FilmCardPage = () => {
  return (
    <MainLayout
      header={<Header name={"S"} shortName={"Sofi"} />}
      content={<FilmList />}
      footer={<></>}
    
    />
  );
};

export default FilmCardPage;
