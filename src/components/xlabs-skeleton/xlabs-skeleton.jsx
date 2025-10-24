import React from "react";
function XlabsSkeleton({ width = "100%", height = 20 }) {
  return (
    <div
      className="bg-gray-200 rounded animate-pulse"
      style={{ width, height }}
    />
  );
}
export default XlabsSkeleton;
