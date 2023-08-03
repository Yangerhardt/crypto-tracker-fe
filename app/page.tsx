import Drawer from "./components/Drawer/drawer";
import RootLayout from "./layout";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <RootLayout>
      <Drawer />
    </RootLayout>
  );
}
