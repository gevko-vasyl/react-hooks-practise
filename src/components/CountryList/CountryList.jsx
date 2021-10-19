export const CountryList = ({ countries }) => {
  console.log(countries);
  const countryData = countries[0].name.common;
  console.log(countryData);
  return (
    <ul>
      {countries.map(({ name, flags }) => (
        <li key={name.common}>
          <img src={flags.png} alt={name.common} width="24" height="24" />
          {name.common}
        </li>
      ))}
    </ul>
  );
};
