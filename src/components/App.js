import React, { Component } from "react";
import UserFilter from "./UserFilter";
import MenuList from "./UsersList";
import s from "./Styles.module.css";
import users from "../data/data.json";

const filterMenu = (filter, users) => {
  return users.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    users: users.sort(),
    medal1: users.sort()[0],
    medal2: users.sort()[1],
    medal3: users.sort()[2],
    filter: ""
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { users, filter, medal1, medal2, medal3 } = this.state;
    const filteredusers = filterMenu(filter, users);
    return (
      <div className={s.container}>
        <UserFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
          placeholder={"Поиск авторов по имени"}
          onFocus
        />
        <MenuList
          users={filteredusers}
          medal1={medal1}
          medal2={medal2}
          medal3={medal3}
        />
      </div>
    );
  }
}
