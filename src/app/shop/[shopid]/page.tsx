"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const ShopDetails = (props: any) => {
  const [shopdata, setShopData] = useState({});

  console.log("shopdata" + shopdata.title);
  const [value, setvalue] = useState(1);
  useEffect(() => {
    const GetshopData = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${props.params.shopid}`
      );
      const data = await response.json();
      setShopData(data);
    };
    GetshopData();
  });

  function handlecartdata() {
    const cartdata = {
      id: shopdata.id,
      title: shopdata.title,
      price: shopdata.price,
      image: shopdata.image,
    };

    let cart = JSON.parse(localStorage.getItem("cartdata")) || [];

    // Check if the item already exists in the cart
    const itemIndex = cart.findIndex((item: any) => item.id === cartdata.id);

    if (itemIndex === -1) {
      // Item not found in the cart, add it
      cart.push(cartdata);
    } else {
      // Item already exists in the cart, you might want to update or handle duplicates
      // For simplicity, we'll just keep the existing item as is
      // If needed, you can uncomment the line below to update the existing item
      cart[itemIndex] = cartdata;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cartdata", JSON.stringify(cart));
  }
  return (
    <section className="w-[90vw]  mt-[8rem] md:mt-[6rem] mx-auto">
      <section>
        <div className=" flex w-[80vw] border border-[#c0c0ce] space-x-4 mx-auto">
          <div className="w-1/2">
            <Image
              className=" border p-2 border-l-[#c0c0ce]"
              src={shopdata?.image}
              alt="image"
              width={400}
              height={400}
            />
          </div>
          <div className="p-10  w-1/2 space-y-6">
            <h1 className="text-2xl">{shopdata?.title}</h1>
            <p className="text-sm">{shopdata?.description}</p>
            <div className="h-[1px] bg-[#c0c0ce] w-full"></div>
            <select
              value={value}
              onChange={(e: any) => setvalue(e.target.value)}
              className="bg-slate-300 p-2 w-[300px] h-[20px] text-white"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <p className="text-xl mt-7 font-bold">{shopdata?.price * value}$</p>
            <button
              className="bg-black p-4 text-white"
              onClick={() => {
                handlecartdata();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ShopDetails;
