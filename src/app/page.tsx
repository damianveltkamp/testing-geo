import styles from "./page.module.css";
import { cookies } from "next/headers";

export default function Home() {
  const ip = cookies().get('x-ip-testing')?.value;

  return (
    <main className={styles.main}>
      Homepage
      <h1>      {ip}
      </h1>
    </main>
  );
}
