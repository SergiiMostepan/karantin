import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.container}>
        <>
          <div className={styles.text}>Добро пожаловать на сайт</div>
          <div className={styles.text}>
            В вашем распоряжении функционал для контроля за температурой
            персонала
          </div>
          <div className={styles.text}>
            Перемещаться по сайту можно с помощью основного меню
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
