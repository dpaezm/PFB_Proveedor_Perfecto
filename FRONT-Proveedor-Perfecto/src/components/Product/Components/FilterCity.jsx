import { InputLabel, MenuItem, Select } from "@mui/material";
import StyledFormControl from "./FindSelect";

export default function FilterCity({ products, selectedCity, onChange }) {
  const uniqueCities = [...new Set(products.map((product) => product.city).filter(Boolean))];

  return (
    <StyledFormControl variant="outlined">
      {/*       <InputLabel>Ubicación</InputLabel> */}
      <Select value={selectedCity} onChange={(e) => onChange(e.target.value)} displayEmpty>
        <MenuItem value="Todas">Todas las ciudades</MenuItem>
        {uniqueCities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>

    /*     <label className="container-filter-place">
      Ubicación:
      <select value={selectedCity} onChange={(e) => onChange(e.target.value)}>
        <option value="Todas">TodasCiudades</option>
        {uniqueCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </label> */
  );
}
