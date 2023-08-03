import React from "react";
import ValueCard from "../components/ValueCard/value-card";
import styles from "./dashboard.module.scss";
import ChartCard from "../components/ChartCard/chart-card";

export default function Dashboard() {
  return (
    <>
      <section className={styles["dashboard-content"]}>
        <div className={styles["value-card-container"]}>
          <ValueCard />
          <ValueCard />
          <ValueCard />
        </div>
        <div className={styles["chart-card-container"]}>
          <ChartCard />
        </div>
      </section>
    </>
  );
}
