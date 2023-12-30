import React from "react";

function InputForm({ label, labelStyle, type, inputStyle, placeholder }) {
  return (
    <div>
      <label htmlFor={label} className={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputForm;
