import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import styles from "./drawer-list.module.scss";
import DrawerListItem from "./list-item/list-item";

const DrawerList = ({ open }: any) => {
  return (
    <div className={styles["drawer-list"]}>
      <DrawerListItem open={open} text="Inbox" icon={<InboxIcon />} />
      <DrawerListItem open={open} text="Starred" icon={<InboxIcon />} />
      <DrawerListItem open={open} text="Send email" icon={<InboxIcon />} />
      <DrawerListItem open={open} text="Drafts" icon={<InboxIcon />} />
    </div>
  );
};

export default DrawerList;
