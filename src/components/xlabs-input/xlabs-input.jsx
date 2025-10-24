import React from "react";
function XlabsInput({ value, onChange, placeholder }) {
  return (
    <input
      className="border border-gray-300 p-2 rounded w-full"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
export default XlabsInput;