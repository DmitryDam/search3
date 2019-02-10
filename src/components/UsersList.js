import React, { Component } from "react";
import Users from "./Users";
import s from "./Styles.module.css";

export default class UsersList extends Component {
  state = {
    currentPage: 1,
    usersPerPage: 10
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { currentPage, usersPerPage } = this.state;
    const { users, medal1, medal2, medal3 } = this.props;
    const usersWithNum = users.map((el, idx) => {
      el["idx"] = idx;
      return el;
    });

    // Logic for displaying current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersWithNum.slice(indexOfFirstUser, indexOfLastUser);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className={s.listContainer}>
        <ol className={s.olContainer}>
          {currentUsers.map(el => (
            <li className={s.list} key={el.name}>
              <Users {...el} medal1={medal1} medal2={medal2} medal3={medal3} />
            </li>
          ))}
        </ol>
        <ul className={s.pageNumbers}>{renderPageNumbers}</ul>
      </div>
    );
  }
}
