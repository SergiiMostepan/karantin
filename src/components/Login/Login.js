import React, { Component } from "react";
import { autorizedUsers } from "../../utils/autorizedUsers";
import styles from "./Login.module.css";

class Login extends Component {
  state = {
    userLogin: "",
    userPass: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();

    this.isAutorized(autorizedUsers, { ...this.state });
  };

  isAutorized(usersAutorized, newUser) {
    usersAutorized.forEach((user) => {
      if (
        user.userLogin === newUser.userLogin &&
        user.userPass === newUser.userPass
      ) {
        this.props.autentificate();
        this.props.autentificatedUser(newUser.userLogin);
        this.props.history.push("/userslist");
      }
    });
    this.setState({
      userLogin: "",
      userPass: "",
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.hendleSubmit} className={styles.form}>
          <label htmlFor="userLogin">Логин</label>
          <input
            type="text"
            name="userLogin"
            id="userLogin"
            value={this.state.userLogin}
            onChange={this.handleChange}
            className={styles.input}
          ></input>
          <label htmlFor="userPass">Пароль</label>
          <input
            type="password"
            name="userPass"
            value={this.state.userPass}
            onChange={this.handleChange}
            className={styles.input}
          ></input>
          <button type="submit" className={styles.button}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
