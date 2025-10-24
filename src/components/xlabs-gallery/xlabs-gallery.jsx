import React from "react";
function XlabsGallery({ images = [] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery ${i}`}
          className="rounded shadow object-cover w-full h-32"
        />
      ))}
    </div>
  );
}
export default XlabsGallery;
