import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import styles from './DropDown.module.css'
import { useDispatch } from "react-redux";
import { setTypeValue } from "../../store/film/film.reduser";



const items: MenuProps["items"] = [
  {
    label: "movie",
    key: "movie",
  },
  {
    label: "series",
    key: "series",
  },
  {
    label: "episode",
    key: "episode",
  },
  {
    label: "all",
    key: "",
  },
];

const DropDown: React.FC = () => {
    const dispatch=useDispatch()
    const [value, setValue] = useState("");
    const onClick: MenuProps["onClick"] = ({ key }) => {
      setValue(key);
      dispatch(setTypeValue(key))
    };
    return (
      <Dropdown menu={{ items, onClick }} className={styles.color}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className={styles.color}>
            <input
              type="text"
              name=""
              id="1"
              placeholder="Your text"
              className={styles.textInput}
              value={value}
              readOnly
            />
            <DownOutlined className={styles.h} />
          </Space>
        </a>
      </Dropdown>
    );

};

export default DropDown;
