import React from "react";
function XlabsBadge({ children, color = "green" }) {
  const colorClass =
    color === "green"
      ? "bg-green-200 text-green-800"
      : color === "blue"
      ? "bg-blue-200 text-blue-800"
      : "bg-gray-200 text-gray-800";
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-bold ${colorClass}`}>
      {children}
    </span>
  );
}
export default XlabsBadge;
  