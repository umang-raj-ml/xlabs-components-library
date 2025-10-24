import React from "react";
function XlabsDivider({ color = "gray-300" }) {
  return <hr className={`border-t border-${color} my-4`} />;
}
export default XlabsDivider;
