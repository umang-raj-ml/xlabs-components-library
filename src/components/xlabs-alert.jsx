import React from "react";
function XlabsAlert({ type = "info", children }) {
  const color =
    type === "success"
      ? "bg-green-100 text-green-800"
      : type === "error"
      ? "bg-red-100 text-red-800"
      : "bg-blue-100 text-blue-800";
  return (
    <div className={`p-4 rounded ${color}`}>
      {children}
    </div>
  );
}
export default XlabsAlert;
