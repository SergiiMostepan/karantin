import React, { Component } from "react";
import Select from "react-select";
import { CSSTransition } from "react-transition-group";
import { usersPositions, cities } from "../../../utils/UsersData";
import Notify from "../../../utils/Notification";
import NotifyTransition from "../transitions/Notify.module.css";
import styles from "./InputForm.module.css";

class InputForm extends Component {
  state = {
    userName: "",
    comment: "",
    userposition: null,
    city: null,
    temperature: "",
    date: "",

    isAdded: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSelector = (selectedOption, e) => {
    this.setState({ [e.name]: selectedOption });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({
      userName: this.state.userName,
      comment: this.state.comment,
      userposition: this.state.userposition,
      city: this.state.city,
      temperature: this.state.temperature,
      date: this.state.date,
      addedDate: new Date(),
      autorizedUser: this.props.autorizedUser,
    });
    this.setState({
      userName: "",
      comment: "",
      userposition: null,
      city: null,
      temperature: "",
      date: "",
      isAdded: true,
    });
    setTimeout(() => this.setState({ isAdded: false }), 1500);
  };

  render() {
    const { userposition, city, temperature, date } = this.state;

    return (
      <div className={styles.continer}>
        <CSSTransition
          in={this.state.isAdded}
          timeout={250}
          classNames={NotifyTransition}
          unmountOnExit
        >
          <Notify />
        </CSSTransition>

        <label htmlFor="userName" className={styles.inputName}>
          ФИО
        </label>
        <form onSubmit={this.hendleSubmit}>
          <input
            className={styles.inputFeld}
            type="text"
            name="userName"
            id="userName"
            value={this.state.userName}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="userposition">Должность</label>
          <Select
            name="userposition"
            id="userposition"
            value={userposition}
            onChange={this.handleChangeSelector}
            options={usersPositions}
            className={styles.selector}
          />

          <label htmlFor="city">Город</label>
          <Select
            name="city"
            id="city"
            value={city}
            onChange={this.handleChangeSelector}
            options={cities}
            className={styles.selector}
          />
          <label htmlFor="data" className={styles.inputName}>
            Дата и время
          </label>
          <input
            className={styles.inputFeld}
            type="datetime-local"
            name="date"
            id="date"
            value={date}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="temperature" className={styles.inputName}>
            Температура
          </label>
          <input
            className={styles.inputFeld}
            type="number"
            name="temperature"
            id="temperature"
            value={temperature}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="comment" className={styles.inputName}>
            Коментарий
          </label>
          <textarea
            className={styles.inputFeld && styles.textArea}
            type="text"
            id="comment"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            required
          />
          <button className={styles.BtnSubmit} type="submit">
            Добавить запись
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
