import Link from "next/link";
import Image from "next/image";
import styles from "./CountryDetails.module.css";
const NeighboringCountry = ({ border }: any) => {
  const { flags, name, cca3 } = border;
  return (
    <Link href={`/country/${cca3}`} key={name.common} passHref>
      <div className={styles.details_panel_borders_country}>
        <div className={styles.details_panel_image_container}>
          <Image src={flags.svg} alt={name.common} fill />
        </div>
        <div className={styles.details_panel_name}>{name.common}</div>
      </div>
    </Link>
  );
};
export default NeighboringCountry;
