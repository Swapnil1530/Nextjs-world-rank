"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./CountriesTable.module.css";
import SearchInput from "./SearchInput/SearchInput";
import { useEffect, useState } from "react";

const filterCountries = (countries: any, keyword: string) =>
  countries.filter(
    (country: any) =>
      country.name.common.toLowerCase().includes(keyword) 
  );
const CountryTable = ({ countries }: any) => {
  const [keyword, setKeyword] = useState("");
  const [currentCountries, setCurrentCountries] = useState(countries);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  useEffect(() => {
    const filteredCountry = filterCountries(countries, keyword);
    setCurrentCountries(filteredCountry);
  }, [keyword, , countries]);
  return (
    <div>
      <div className={styles.input_container}>
        <div className={styles.counts}>
          <div>{countries.length} countries found</div>
        </div>
        <div className={styles.input}>
          <SearchInput placeholder="" onChange={onInputChange} />
        </div>
      </div>

      <div className={styles.heading}>
        <div className={styles.heading_flag} />

        <div className={styles.heading_name}>name</div>

        <div className={styles.heading_population}>population</div>

        <div className={styles.heading_area}>
          Area (km
          <sup style={{ fontSize: "0.5rem" }}>2</sup>)
        </div>

        <div className={styles.heading_gini}>gini</div>
      </div>
      {currentCountries.length > 0 ? currentCountries.map((country: any) => (
        <Link
          href={`/country/${country.cca3}`}
          key={country.name.common}
          passHref
        >
          <div className={styles.row}>
            <div className={styles.flag}>
              <Image src={country.flags.svg} alt={country.name.common} fill />
            </div>
            <div className={styles.mobileFlag}>{country.flag}</div>
            <div className={styles.name}>{country.name.common}</div>
            <div className={styles.population}>{country.population}</div>
            <div className={styles.area}>{country.area || 0}</div>
            <div className={styles.gini}>
              {country.gini ? (
                <>
                  {Object.keys(country.gini).map((year) => (
                    <div key={year}>{country.gini[year]} %</div>
                  ))}
                </>
              ) : (
                "-"
              )}
            </div>
          </div>
        </Link>
      )):(<div>No Data Found</div>)}
    </div>
  );
};
export default CountryTable;
