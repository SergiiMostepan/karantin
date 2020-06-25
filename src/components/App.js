import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "normalize.css";
import UsersList from "./UsersBlock/UsersBlockContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginContainer from "./Login/LoginContainer";
import InputForm from "./UsersBlock/InputForm/InputFirmContainer";
import Home from "./Home/Home";

const App = ({ isAuntificated }) => {
  return (
    <Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        {!isAuntificated && <Route path="/login" component={LoginContainer} />}
        {isAuntificated && <Route path="/userslist" component={UsersList} />}
        {isAuntificated && <Route path="/new-item" component={InputForm} />}
        <Route component={Home} />
      </Switch>
    </Fragment>
  );
};

export default App;
