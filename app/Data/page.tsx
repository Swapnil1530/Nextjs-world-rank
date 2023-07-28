const Data = () => {
    return (
        <div>
        <div className={styles.input_container}>
        <div className={styles.counts}>
          <div>
            {countries.length} {translate.foundCountries}
          </div>
          <button
            type="button"
            className={styles.shuffleButton}
            title={translate.randomCountry}
            onClick={randomCountry}
            disabled={countries.length === 0}
          >
            <Shuffle />
          </button>
        </div>
        <div className={styles.input}>
          <SearchInput
            placeholder={translate.filter}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div>
        <div className={styles.heading}>
          <div className={styles.heading_flag} />
          <button
            type="button"
            className={styles.heading_name}
            onClick={() => setValueAndDirection('name')}
          >
            <div>{translate.sort.name}</div>
            {sortKey === 'name' && <SortArrow direction={direction} />}
          </button>

          <button
            type="button"
            className={styles.heading_population}
            onClick={() => setValueAndDirection('population')}
          >
            <div>{translate.sort.population}</div>
            {sortKey === 'population' && <SortArrow direction={direction} />}
          </button>

          <button
            type="button"
            className={styles.heading_area}
            onClick={() => setValueAndDirection('area')}
          >
            <div>
              {translate.sort.area} (km
              <sup style={{ fontSize: '0.5rem' }}>2</sup>)
            </div>
            {sortKey === 'area' && <SortArrow direction={direction} />}
          </button>

          <button
            type="button"
            className={styles.heading_gini}
            onClick={() => setValueAndDirection('gini')}
          >
            <div>{translate.sort.gini}</div>
            {sortKey === 'gini' && <SortArrow direction={direction} />}
          </button>
        </div>
        {currentCountries.map((country) => (
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
              <div className={styles.name}>
                {country.translations[language]?.common ?? country.name.common}
              </div>
              <div className={styles.population}>
                {formatNumber(country.population)}
              </div>
              <div className={styles.area}>
                {formatNumber(country.area) || 0}
              </div>
              <div className={styles.gini}>{giniToString(country.gini)}</div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    )
}
export default Data;