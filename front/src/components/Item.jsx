import React from "react";

const Item = ({ place }) => {
  return (
    <a href="/" className="flex flex-col gap-3">
      <img
        src={place.photos[0]}
        alt=""
        className="aspect-square rounded-2xl object-cover"
      />

      <div className="">
        <h3 className="text-xl font-semibold">{place.city}</h3>
        <p className="truncate text-gray-600">{place.description}</p>
      </div>

      <p>
        <span className="font-semibold">R$ {place.price}</span> por noite
      </p>
    </a>
  );
};

export default Item;
