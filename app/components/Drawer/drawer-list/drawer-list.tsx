import React from "react";
import styles from "./drawer-list.module.scss";
import DrawerListItem from "./list-item/list-item";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLogoBitcoin, BiSolidDashboard, BiHistory } from "react-icons/bi";
import { GoGoal } from "react-icons/go";

const DrawerList = ({ open }: any) => {
  return (
    <div className={styles["drawer-list"]}>
      <DrawerListItem
        open={open}
        text="Dashboard"
        icon={<BiSolidDashboard />}
      />
      <DrawerListItem open={open} text="Assets" icon={<BiLogoBitcoin />} />
      <DrawerListItem open={open} text="History" icon={<BiHistory />} />
      <DrawerListItem
        open={open}
        text="Projections"
        icon={<AiOutlineFundProjectionScreen />}
      />
      <DrawerListItem open={open} text="Goals" icon={<GoGoal />} />
    </div>
  );
};

export default DrawerList;
