import { styled } from "@mui/material/styles";

const StyledSortControl = styled("div")({
  minWidth: 150,
  maxWidth: 240,
  fontFamily: "Poppins, sans-serif",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    border: "none",
    "& fieldset": {
      border: "none",
    },
    "& .MuiSelect-select": {
      padding: "10px",
      color: "var(--color-gris1)",
    },
  },
  "& .MuiMenuItem-root": {
    fontFamily: "Poppins, sans-serif",
    color: "var(--color-gris1)",
  },
});

export default StyledSortControl;
