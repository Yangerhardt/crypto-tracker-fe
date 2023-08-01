"use client";

import React, { useState } from "react";
import DrawerHeader from "../drawer-header/drawer-header";
import DrawerList from "../drawer-list/drawer-list";
import styles from "./drawer.module.scss";

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
    </div>
  );
}
