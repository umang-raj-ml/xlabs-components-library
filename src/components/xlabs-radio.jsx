import React from "react";
function XlabsRadio({ checked, onChange, label, name }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        name={name}
        className="form-radio h-4 w-4 text-blue-600"
      />
      <span>{label}</span>
    </label>
  );
}
export default XlabsRadio;
