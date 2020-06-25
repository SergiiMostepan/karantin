import React, { Fragment } from "react";
import styles from "./Section.module.css";

const Section = ({ children }) => (
  <Fragment>
    <div className={styles.bodycontainet}>
      <div className={styles.container}> {children} </div>
    </div>
  </Fragment>
);

export default Section;
