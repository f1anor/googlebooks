import React, { useRef } from "react";
import css from "./DropdownMenu.module.css";

const DropdownMenu = ({ onChange, value, className = "", list = [] }) => {
  const ref = useRef();

  return (
    <div className={[css.wrapper, className].join(" ")}>
      <label className={css.inner}>
        <select ref={ref} onChange={onChange} value={value}>
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
