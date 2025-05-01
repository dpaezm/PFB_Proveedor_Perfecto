import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./../../../pages/ProductList.css";

const FindSlider = styled(Slider)(({ theme }) => ({
  color: "var(--color-amarillo)",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(255, 193, 7, 0)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
}));

export default FindSlider;
