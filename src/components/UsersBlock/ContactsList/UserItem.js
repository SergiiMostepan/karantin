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
      <div className={styles.creatorData}>
        <div>{autorizedUser}</div>
        <div>{createdTime}</div>
      </div>
      <div className={styles.userData}>
        <div className={styles.indicators}>
          <div className={styles.textItem}>ФИО</div>
          <div className={styles.textItem}>Должность</div>
          <div className={styles.textItem}>Город</div>
          <div className={styles.textItem}>Дата измерения</div>
          <div className={styles.textItem}>Температура</div>
          <div className={styles.textItem}>Комментарий</div>
        </div>
        <div>
          <div className={styles.textItem}> {userName} </div>
          {userPosition ? (
            <div className={styles.textItem}>{userPosition.label}</div>
          ) : (
            <div className={styles.textItem}>-</div>
          )}
          {city ? (
            <div className={styles.textItem}>{city.label}</div>
          ) : (
            <div className={styles.textItem}>-</div>
          )}
          <div className={styles.textItem}>{userDate}</div>
          <div className={styles.textItem}>{temperature}</div>
          <div className={styles.textItem}>{comment}</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="button" onClick={deleteCont}>
          <span> &#215;</span>
        </button>
      </div>
    </li>
  );
};

export default UserItem;
