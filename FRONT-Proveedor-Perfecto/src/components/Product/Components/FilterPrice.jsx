import "./../../../pages/ProductList.css";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import FindSlider from "./FindSlider";

export default function FilterPrice({ selectedMin = 0, selectedMax = 6000, onChange }) {
  /*   const [min, setMin] = useState(selectedMin);
  const [max, setMax] = useState(selectedMax); */

  const [value, setValue] = useState([selectedMin, selectedMax]);

  useEffect(() => {
    onChange(value[0], value[1]);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /*   function handleApply() {
    onChange(min, max);
  } */

  return (
    <div className="container-filter-slider">
      <Typography gutterBottom>Precio:</Typography>
      <FindSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        step={100}
        marks={[
          { value: 0, label: "0 €" },
          { value: 500, label: "500 €" },
          { value: 1000, label: "1000 €" },
          { value: 1500, label: "1500 €" },
          { value: 2000, label: "2000 €" },
        ]}
      />

      {/*       <label>
        Precio minimo:
        <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
      </label>
      <label>
        Precio máximo:
        <input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
      </label>
      <button onClick={handleApply}>Aplicar</button> */}
    </div>
  );
}
