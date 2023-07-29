import styles from "./CountryDetails.module.css";
import Image from "next/image";
import getBorders from "@/api/getBorders";
import NeighboringCountry from "./NeighboringCountry";

const CountryDetails = async ({ country }: any) => {
  let border: any = [];
  if (country.borders && country.borders.length > 0) {
    try {
      border = await getBorders(country.borders);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  const hasBorders = border.length !== 0;
  const getCurrencies = () => {
    if (!country.currencies) return "-";
    return Object.keys(country.currencies)
      .map((curr) => country.currencies?.[curr]?.name)
      .join(", ");
  };

  const getLanguages = () => {
    if (!country.languages) return "-";
    return Object.keys(country.languages)
      .map((lang) => country.languages?.[lang])
      .join(", ");
  };

  const getNativeName = () => {
    if (!country.name.nativeName) return "-";
    return Object.keys(country.name.nativeName)
      .map((native) => country.name.nativeName?.[native]?.common)
      .join(", ");
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.overview_panel}>
          <div className={styles.overview_image_container}>
            <Image
              src={country.flags.svg}
              alt={country.flags.alt ?? country.name.common}
              title={country.flags.alt ?? country.name.common}
              fill
            />
          </div>

          <h1 className={styles.overview_name}>{country.name.common}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>
                {country.area} (km
                <sup style={{ fontSize: "0.5rem" }}>2</sup>)
              </div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container_botton}></div>

      <div className={styles.container_right}>
        <div className={styles.details_panel}>
          <h2 className={styles.details_panel_heading}>Details</h2>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Capital</div>
            <div className={styles.details_panel_value}>
              {country.capital?.[0] ?? "-"}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Subregion</div>
            <div className={styles.details_panel_value}>
              {country.subregion}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Language</div>
            <div className={styles.details_panel_value}>{getLanguages()}</div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Currencies</div>
            <div className={styles.details_panel_value}>{getCurrencies()}</div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>NativeName</div>
            <div className={styles.details_panel_value}>{getNativeName()}</div>
          </div>

          <div className={styles.details_panel_row}>
            <div
              className={styles.details_panel_label}
              //   title={giniDefinition}
            >
              Gini
            </div>
            <div className={styles.details_panel_value}>
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
          <div>
            {!hasBorders ? (
              <div className={styles.details_panel_no_borders}>
                <div className={styles.details_panel_borders_label}>
                  Neighboring Countries
                </div>
                <div className={styles.details_panel_value}>No Neighbors</div>
              </div>
            ) : (
              <div className={styles.details_panel_borders}>
                <div className={styles.details_panel_borders_label}>
                  Neighboring Countries
                </div>
                <div className={styles.details_panel_borders_container}>
                  {border.map((data: any) => {
                    return <NeighboringCountry border={data} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
