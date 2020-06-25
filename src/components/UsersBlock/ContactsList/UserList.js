import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import UserTransition from "../transitions/Contacts.module.css";
import UserContainer from "./UserContainer";
import styles from "./Userslist.module.css";

const UserList = ({ contacts }) =>
  contacts.length > 0 ? (
    <TransitionGroup component="ul" className={styles.continer}>
      {contacts.map(
        ({
          userName,
          comment,
          id,
          userposition,
          city,
          date,
          temperature,
          addedDate,
          autorizedUser,
        }) => (
          <CSSTransition key={id} timeout={250} classNames={UserTransition}>
            <UserContainer
              userName={userName}
              comment={comment}
              userPosition={userposition}
              city={city}
              date={date}
              temperature={temperature}
              id={id}
              addedDate={addedDate}
              autorizedUser={autorizedUser}
            />
          </CSSTransition>
        )
      )}
    </TransitionGroup>
  ) : (
    <h3>Информации нет</h3>
  );

export default UserList;
