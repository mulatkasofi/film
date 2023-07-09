import React, { useState } from "react";
import styles from "./Filter.module.css";
import logo from "../../img/pixema.png";
import vector from "../../img/Vector 1 2.png";
import filter from "../../img/Vector 1.png";
import home from "../../img/Shape.png";
import trend from "../../img/Path.png";
import favorites from "../../img/Bookmark.png";
import favorites2 from "../../img/Bookmark.jpg";
import settings from "../../img/Subtract.png";
import { NavLink } from "react-router-dom";
import { useDidUpdate } from "../../hooks/useDidUpdate";

const Filter: React.FC = () => {
  const [enter, setEnter] = useState(false);
 

  return (
    <div className={styles.filter}>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.display}>
          <img src={home} alt="" />
          <p className={styles.title}>Home</p>
        </div>
      </NavLink>
      <NavLink to={""} style={{ textDecoration: "none" }}>
        <div className={styles.display}>
          <img src={trend} alt="" />
          <p className={styles.title}>Trends</p>
        </div>
      </NavLink>

      <NavLink
        to={"/myFavorite"}
        style={{ textDecoration: "none" }}
        onClick={() => setEnter(true)}
      >
        {enter ? (
          <div className={styles.display}>
            <img src={favorites2} alt="" />
            <p className={styles.title}>Favorites</p>
          </div>
        ) : (
          <div className={styles.display}>
            <img src={favorites} alt="" />
            <p className={styles.title}>Favorites</p>
          </div>
        )}
      </NavLink>
      <NavLink to={""} style={{ textDecoration: "none" }}>
        <div className={styles.display}>
          <img src={settings} alt="" />
          <p className={styles.title}>Settings</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Filter;
