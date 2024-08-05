"use client";
import React, { useContext } from "react";
import { Context } from "../NavWrapper";
import Image from "next/image";
import Link from "next/link";
const ShopProduct = () => {
  const shopdata = useContext(Context);
  return (
    <div className="w-full mt-[6rem] md:mt-[8rem] h-full">
      <div className="grid grid-cols-1 w-[80vw]  rounded-lg mx-auto  md:grid-cols-3  ">
        {shopdata
          .map((item: any) => {
            return (
              <div key={item.id} className="p-4">
                <div className="overflow-hidden rounded-md border">
                  <Image
                    className="  h-[300px] md:object-fit object-contain p-4 w-[300px] rounded-md transation duration-500 hover:scale-110  "
                    src={item.image}
                    alt="images"
                    width={200}
                    height={200}
                  />
                  <div className="h-[1px] bg-[#c0c0ce] w-[95%] mx-auto"></div>
                  <Link href={`/shop/${item.id}`}>
                    <div className="p-4">
                      <h1 className="text-lg font-semibold">
                        {" "}
                        {item.title.split(" ").slice(0, 3).join(" ")}
                      </h1>
                      <p className="mt-3 text-sm text-gray-600">
                        {item.price} $
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })
          .slice(0, 20)}
      </div>
    </div>
  );
};

export default ShopProduct;
