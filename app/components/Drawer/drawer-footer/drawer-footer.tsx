import React from "react";
import styles from "./drawer-footer.module.scss";
import classNames from "classnames";

interface DrawerFooterprops {
  open: boolean;
}

export default function DrawerFooter({ open }: DrawerFooterprops) {
  return (
    <div className={classNames(styles["drawer-footer-container"], !open && styles["closed"])}>
      CryptoTracker &#x2713;
    </div>
  );
}
