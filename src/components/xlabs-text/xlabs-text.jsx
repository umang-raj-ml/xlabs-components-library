import React from "react";
function XlabsText({ children, size = "md", color = "black" }) {
  const sizeClass =
    size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base";
  const colorClass = color === "gray" ? "text-gray-500" : "text-black";
  return <span className={`${sizeClass} ${colorClass}`}>{children}</span>;
}
export default XlabsText;
