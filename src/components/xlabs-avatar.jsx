import React from "react";
function XlabsAvatar({ src, alt, size = 40 }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}
export default XlabsAvatar;
