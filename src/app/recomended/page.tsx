"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Context } from "@/app/NavWrapper";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const RecomendedProduct = () => {
  const data = useContext(Context);
  console.log("recommended data: ", data);
  return (
    <section className="w-full md:mt-[6rem] overflow-hidden h-full mx-auto">
      <div>
        <div className="mx-auto overflow-hidden  w-screen h-auto ">
          <div className="w-[90vw] h-[70vh]  bg-[#f3f3f3] md:mx-10">
            <div className="mx-auto flex  justify-between items-center ">
              <div
                className={`${roboto.className} text-4xl  font-semibold mx-28`}
              >
                {" "}
                Recomended Products
              </div>

              <Image
                className="object-cover overflow-hidden"
                src="/recomendedbanner.png"
                alt="heroImage"
                width={450}
                height={450}
              />
            </div>
          </div>

          {/* RECOMENDED DISPLAY SECTION */}
          <div className="grid grid-cols-1 w-[80vw]  rounded-lg mx-auto  md:grid-cols-3  ">
            {data
              .map((item: any) => {
                 .log("items " + item.image);
                return (
                  <div key={item.id} className="p-4">
                    <div className="overflow-hidden rounded-md border">
                      <Image
                        className="  h-[300px] object-fit p-4 w-[300px] rounded-md transation duration-500 hover:scale-110  "
                        src={item.image}
                        alt="images"
                        width={200}
                        height={200}
                      />
                      <div className="h-[1px] bg-[#c0c0ce] w-[95%] mx-auto"></div>
                      <Link href={`/recomended/${item.id}`}>
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
              .slice(10, 16)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecomendedProduct;
