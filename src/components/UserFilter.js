import React from "react";
import s from "./Styles.module.css";

const UserFilter = ({ filter, onFilterChange, placeholder }) => (
  <input
    className={s.searchInput}
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder={placeholder}
    autoFocus
  />
);

export default UserFilter;
