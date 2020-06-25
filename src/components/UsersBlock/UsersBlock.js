import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Section from "./Section/Section";
import UsersList from "./ContactsList/UserList";
import Filter from "./Filter/FilterContainer";
import Notify from "../../utils/Notification";
import NotifyTransition from "./transitions/Notify.module.css";
import FilterTransition from "./transitions/Filter.module.css";

const taskFilter = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.userName.toLowerCase().includes(filter.toLowerCase())
  );
};

class UsersBlock extends Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const filteredTasks = taskFilter(
      this.props.contactState,
      this.props.filterState
    );

    return (
      <Section>
        <CSSTransition
          in={this.state.isContactExist}
          timeout={250}
          classNames={NotifyTransition}
          unmountOnExit
        >
          <Notify />
        </CSSTransition>

        <CSSTransition
          in={this.props.contactState.length >= 2}
          timeout={250}
          classNames={FilterTransition}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <UsersList
          contacts={
            this.props.contactState.length >= 2
              ? filteredTasks
              : this.props.contactState
          }
        ></UsersList>
      </Section>
    );
  }
}

export default UsersBlock;
