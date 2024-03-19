import styles from "./page.module.css";
import { cookies } from "next/headers";

export default function Home() {
  const ip = cookies().get('x-ip-testing')?.value;
  const country = cookies().get('x-country')?.value;

  return (
    <main className={styles.main}>
      Homepage
      <h1>      {ip}
      </h1>
      <p>{country}</p>
    </main>
  );
}
