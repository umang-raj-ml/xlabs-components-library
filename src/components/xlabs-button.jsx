import React from "react";

function XlabsButton({ variant = "primary", children, onClick }) {
  const classes =
    variant === "primary"
      ? "px-4 py-2 bg-blue-600 text-white rounded"
      : "px-4 py-2 bg-gray-200 text-black rounded";
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default XlabsButton;
