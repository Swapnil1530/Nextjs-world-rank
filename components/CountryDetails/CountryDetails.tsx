import styles from "./CountryDetails.module.css";
import Image from "next/image";

const CountryDetails = ({ country }: any) => {

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
    return (
      Object.keys(country.name.nativeName)
        // first common native name
        .map((native) => country.name.nativeName?.[native]?.common)
        .join(", ")
    );
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

      <div className={styles.container_botton}>
        {/* <div className={styles.details_map}>
          <div className={styles.map_heading_container}>
            <h2 className={styles.details_panel_heading}>Map</h2>
            <button
              type="button"
              title="Google maps link"
              onClick={() => window.open(country.maps.googleMaps)}
            >
              <MapPin />
            </button>
          </div>
          <Mapbox coordinates={country.latlng} />
        </div> */}
      </div>

      <div className={styles.container_right}>
        <div className={styles.details_panel}>
          <h2 className={styles.details_panel_heading}>{country.details}</h2>

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

          {/* {!hasBorders ? (
            <div className={styles.details_panel_no_borders}>
              <div className={styles.details_panel_borders_label}>
                {translate.country.neighboringCountries}
              </div>
              <div className={styles.details_panel_value}>
                {translate.country.noNeighbors}
              </div>
            </div>
          ) : (
            // <div className={styles.details_panel_borders}>
            //   <div className={styles.details_panel_borders_label}>
            //     {country.neighboringCountries}
            //   </div>
            //   <div className={styles.details_panel_borders_container}>
            //     {bordersLoading && translate.loading}
            //     {!bordersLoading &&
            //       borders.map((border) => (
            //         <NeighboringCountry key={border.cca3} country={border} />
            //       ))}
            //   </div>
            // </div>
            <></>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
