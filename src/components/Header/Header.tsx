import React, { useCallback, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../img/pixema.png";
import vector from "../../img/Vector 1 2.png";
import filterImg from "../../img/Vector 1.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setClearYear,
  setQueryValue,
  setTypeClear,
  setYearValue,
  sortYearFalse,
  sortYearTrue,
} from "../../store/film/film.reduser";
import searchicon from "../../img/icons8-search-50.png";
import cancel from "../../img/Cancel.png";
import { getSlice } from "../../store/film/film.selector";
import { log } from "console";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { Film } from "../../store/film/film.types";
import DropDown from "../DroprDown/DropDown";
import Filter from "../Filter/Filter";
interface TitleProps {
  name: string;
  shortName: string;
}

const Header: React.FC<TitleProps> = ({ name, shortName }) => {
  const [search, setSearch] = useState("");
  const [years,setYear]=useState("")
  const [filterModal, setFilterModal] = useState(false);

  const [sort, setSort] = useState(false);
  const { filter} = useSelector(getSlice);
  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
    const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
      setYear(e.target.value);
    };
  const handleSearchClick = () => {
    dispatch(setTypeClear())
    dispatch(setClearYear())
    dispatch(setQueryValue(search));
  };
  const handleShowResultClick = () => {
    console.log(filter);
      dispatch(setYearValue(years));
    dispatch(setQueryValue(search));
    setFilterModal(false);
  
  };


  const handleChangeFilter = () => {
    dispatch(sortYearTrue());
    setSort(true);
  };
  const handleChangeFilterFalse = () => {
    dispatch(sortYearFalse());
    setSort(false);
  };
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <div>
        <input
          type="text"
          className={styles.input}
          placeholder="Search..."
          onChange={handleChangeInput}
        />
        <button onClick={handleSearchClick} className={styles.search}>
          <img src={searchicon} alt="" className={styles.searchImg} />
        </button>
        <button
          onClick={() => setFilterModal(true)}
          className={styles.filterButton}
        >
          <img src={filterImg} alt="" className={styles.filter} />
        </button>
        {filterModal ? (
          <div className={styles.filterBlock}>
            <div className={styles.filterWrapper}>
              <div className={styles.inform}>
                <p className={styles.title}>Filters</p>
                <button
                  onClick={() => setFilterModal(false)}
                  className={styles.cancel}
                >
                  <img src={cancel} alt="" className={styles.cancelImg} />
                </button>
              </div>
              <div className={styles.titleSeearch}>
                <p className={styles.sortBy}>Sort by</p>
                {sort ? (
                  <div className={styles.sortButtonClick}>
                    <button
                      className={styles.sortBt}
                      onClick={handleChangeFilterFalse}
                    >
                      Year
                    </button>
                  </div>
                ) : (
                  <div className={styles.sortButton}>
                    <button
                      className={styles.sort}
                      onClick={handleChangeFilter}
                    >
                      Year
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.titleSeearch}>
                <p className={styles.sortBy}>Full or short movie name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your text"
                  className={styles.textInput}
                  onChange={handleChangeInput}
                  value={search}
                />
              </div>
              <div className={styles.titleSeearch}>
                <p className={styles.sortBy}>Years</p>
                <input
                  type="text"
                  name=""
                  id="1"
                  placeholder="Year"
                  className={styles.textInput1}
                  onChange={handleChangeYear}
                  value={years}
                />
              </div>
              <div className={styles.titleSeearch}>
                <p className={styles.sortBy}>Type</p>
            
                  <DropDown></DropDown>
    
              </div>
              <div className={styles.buttons}>
                <button className={styles.clear}>Clear filter</button>
                <button className={styles.show} onClick={handleShowResultClick}>
                  Show results
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.shortName}>{shortName}</div>
        <p className={styles.name}>{name}</p>
        <button className={styles.button}>
          <img src={vector} alt="" />
        </button>
      </div>
    
    </div>
  );
};

export default Header;
