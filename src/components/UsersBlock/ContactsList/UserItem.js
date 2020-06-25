import React from "react";
import styles from "./Userslist.module.css";
import { currentDate } from "../../../utils/DateUtils";

const UserItem = ({
  userName,
  comment,
  id,
  deleteUser,
  userPosition,
  city,
  date,
  temperature,
  autorizedUser,
  addedDate,
}) => {
  const deleteCont = () => deleteUser(id);
  let userDate = currentDate(date);
  const createdTime = currentDate(addedDate);

  return (
    <li className={styles.contact}>
      <div className={styles.userData}>
        <div> {userName} </div>
        {userPosition && <div>{userPosition.label}</div>}
        {city && <div>{city.label}</div>}
        <div>{userDate}</div>
        <div>{temperature}</div>
        <div>{comment}</div>
        <div>{autorizedUser}</div>
        <div>{createdTime}</div>
      </div>
      <button className={styles.button} type="button" onClick={deleteCont}>
        <span> &#215;</span>
      </button>
    </li>
  );
};

export default UserItem;
