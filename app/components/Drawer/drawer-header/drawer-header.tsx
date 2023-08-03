import React from "react";
import IconButton from "@mui/material/IconButton";
import styles from "./drawer-header.module.scss";
import { AiOutlineMenu } from 'react-icons/ai';

interface DrawerHeaderprops {
  open: boolean;
  handleOpen: () => void;
}

const DrawerHeader = ({ open, handleOpen }: DrawerHeaderprops) => {
  return (
    <div className={styles["drawer-header"]}>
      {open && <div className={styles["drawer-header-text"]}>Teste</div>}
      <IconButton onClick={handleOpen}>
        <AiOutlineMenu className={open ? styles["menu-icon-open"] : ""} />
      </IconButton>
    </div>
  );
};

export default DrawerHeader;
