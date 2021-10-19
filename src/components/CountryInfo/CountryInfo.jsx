const formatLanguages = (languages) => {
  return Object.values(languages).join(", ");
};

export const CountryInfo = ({ country }) => {
  const { flags, name, capital, languages, population } = country;
  return (
    <div>
      <h1>
        <img src={flags.png} alt={name.common} width="40" height="40" />
        {name.common}
      </h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Languages: {formatLanguages(languages)}</p>
    </div>
  );
};
