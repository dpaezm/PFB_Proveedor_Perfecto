import { MenuItem, Select } from "@mui/material";
import StyledFormControl from "./../Product/Components/FindSelect";

export default function FilterProviderCity({ provider, selectedCity, onChange }) {
  const uniqueCities = [...new Set(provider.map((provider) => provider.city).filter(Boolean))];

  return (
    <StyledFormControl variant="outlined">
      <Select value={selectedCity} onChange={(e) => onChange(e.target.value)} displayEmpty>
        <MenuItem value="Todas">Todas las ciudades</MenuItem>
        {uniqueCities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
}
