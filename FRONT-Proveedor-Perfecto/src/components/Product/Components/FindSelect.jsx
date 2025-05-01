import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)({
  minWidth: 150,
  maxWidth: 240,
  fontFamily: "Poppins, sans-serif",

  "& .MuiSelect-root, & .MuiMenuItem-root, & .MuiOutlinedInput-input": {
    fontFamily: "Poppins, sans-serif",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },

  "& .MuiSelect-select": {
    fontFamily: "Poppins, sans-serif",
  },
});

export default StyledFormControl;
