import MainLayout from "../../layouts/Auth/MainLayout";
import Header from "../../components/Header/Header";
import FilmCardOne from "../../components/FilmCardOne/FilmCardOne";
import Filter from "../../components/Filter/Filter";


const FilmCardOnePage = () => {
  return (
    <MainLayout header={<Header name={"S"} shortName={"Sofi"} />} content={<FilmCardOne />} footer={<></>}  />
  );
};

export default FilmCardOnePage;
