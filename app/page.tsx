import Image from "next/image";
import styles from "./page.module.css";
import { getCountries } from "@/api/getCountries";
import CountryTable from "@/components/CountriesTable/CountryTable";

const HomePage = async () => {
  const countries = await getCountries();
  if (!countries) return null;

  return (
    <div>
      <CountryTable countries={countries} />
    </div>
  );
};
export default HomePage;
