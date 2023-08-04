import React from "react";
import ValueCard from "../components/ValueCard/value-card";
import styles from "./dashboard.module.scss";
import ChartCard from "../components/ChartCard/chart-card";
import AssetsCard from "../components/AssetsCard/assets-card";
import CustomCard from "../components/CustomCard/custom-card";

export default function Dashboard() {
  return (
    <section className={styles["dashboard-content"]}>
      <div className={styles["value-card-container"]}>
        <ValueCard />
        <ValueCard />
        <ValueCard />
      </div>
      <div className={styles["chart-assets-wrapper"]}>
        <div className={styles["left-container"]}>
          <div className={styles["chart-card-container"]}>
            <ChartCard />
          </div>
          <div className={styles["custom-card-container"]}>
            <CustomCard />
            <CustomCard />
          </div>
        </div>
        <div className={styles["right-container"]}>
          <AssetsCard />
        </div>
      </div>
    </section>
  );
}
