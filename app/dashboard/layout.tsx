import Drawer from "../components/Drawer/drawer"
import styles from './dashboard.module.scss'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles["dashboard-container"]}>
      <Drawer />
      {children}
    </section>
  )
}