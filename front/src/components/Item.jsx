import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-3">
      <img
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-1498092169070408484/original/99ea7e66-9a0c-4a99-a342-3c8bb52032d4.jpeg?im_w=720"
        alt=""
        className="aspect-square rounded-2xl object-cover"
      />

      <div className="">
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          minima? Tenetur culpa consequatur rem nobis saepe natus reprehenderit
          laborum impedit, voluptas nisi voluptate, incidunt, quam deserunt
          soluta earum eos totam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Porro commodi voluptates, rerum corrupti ipsum a sit
          ipsa tempore ab, ducimus cumque dolore atque, expedita fuga sequi
          officia provident voluptatibus dolorem.
        </p>
      </div>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>

    </a>
  );
};

export default Item;
