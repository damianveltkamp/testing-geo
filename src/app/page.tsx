import styles from "./page.module.css";
import { cookies } from "next/headers";

export default async function Home() {
  const ip = cookies().get('x-ip-testing')?.value;
  const country = cookies().get('x-country')?.value;

  return (
    <main className={styles.main}>
      Homepage
      <ul>
        <li>{ip}</li>
        <li>Country gotten from vercels geo {country}</li>
      </ul>
    </main>
  );
}
