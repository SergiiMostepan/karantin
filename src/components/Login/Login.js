import React, { Component } from "react";
import { autorizedUsers } from "../../utils/autorizedUsers";

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

  // hendleSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.state.userLogin === "admin" && this.state.userPass === "admin") {
  //     this.props.autentificate();
  //     this.props.history.push("/userslist");
  //   } else alert("Пользыватель не найден");
  //   this.setState({
  //     userLogin: "",
  //     userPass: "",
  //   });
  // };

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
      // else alert("Пользыватель не найден");
    });
    this.setState({
      userLogin: "",
      userPass: "",
    });
  }

  render() {
    // console.log(this.props.autentificatedUser);
    return (
      <div>
        <form onSubmit={this.hendleSubmit}>
          <label htmlFor="userLogin">Логин</label>
          <input
            type="text"
            name="userLogin"
            id="userLogin"
            value={this.state.userLogin}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="userPass">Пароль</label>
          <input
            type="password"
            name="userPass"
            value={this.state.userPass}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default Login;
