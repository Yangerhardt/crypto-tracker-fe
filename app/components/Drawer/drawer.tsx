"use client";

import React, { useState } from "react";
import styles from "./drawer.module.scss";
import DrawerHeader from "./drawer-header/drawer-header";
import DrawerList from "./drawer-list/drawer-list";
import DrawerFooter from "./drawer-footer/drawer-footer";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${styles["drawer-container"]} ${
        open ? styles["opened"] : styles["closed"]
      }`}
    >
      <DrawerHeader open={open} handleOpen={handleOpen} />
      <DrawerList open={open} />
      <DrawerFooter open={open}/>
    </div>
  );
}
