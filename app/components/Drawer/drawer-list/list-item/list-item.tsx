import React from "react";
import styles from "./list-item.module.scss";

const DrawerListItem = ({ open, text, icon }: any) => {
  return (
    <div className={`${styles["drawer-list-item"]} ${open ? "opened" : ""}`}>
      <div className={styles["drawer-list-item-button"]}>
        <div className={styles["drawer-list-item-icon"]}>{icon}</div>
        <div className={styles["drawer-list-item-text"]}>{open && text}</div>
      </div>
    </div>
  );
};

export default DrawerListItem;
