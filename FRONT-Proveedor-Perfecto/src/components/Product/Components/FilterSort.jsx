import { Select, MenuItem } from "@mui/material";
import StyledSortControl from "./FindSort";

export default function FilterSort({ selectedSort, onChange }) {
  return (
    <StyledSortControl>
      <Select value={selectedSort} onChange={(e) => onChange(e.target.value)} displayEmpty fullWidth>
        <MenuItem value="">Ordenar por</MenuItem>
        <MenuItem value="priceAsc">Precio ascendente</MenuItem>
        <MenuItem value="priceDesc">Precio descendente</MenuItem>
        <MenuItem value="ratingAsc">Puntuación ascendente</MenuItem>
        <MenuItem value="ratingDesc">Puntuación descendente</MenuItem>
      </Select>
    </StyledSortControl>
  );
}
