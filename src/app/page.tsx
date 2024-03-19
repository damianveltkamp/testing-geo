import styles from "./page.module.css";
import { cookies } from "next/headers";

export default async function Home() {
  const ip = cookies().get('x-ip-testing')?.value;
  const country = cookies().get('x-country')?.value;
  const countryBasedOnIP = await fetch(`https://api.iplocation.net/?ip=62.163.213.53`)

  return (
    <main className={styles.main}>
      Homepage
      <ul>
        <li>{ip}</li>
        <li>Geo data gotten from api.iplocation api {countryBasedOnIP.json()}</li>
        <li>Country gotten from vercels geo {country}</li>
      </ul>
    </main>
  );
}
