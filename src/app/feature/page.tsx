"use client";
import { Roboto } from "next/font/google";
import React, { useContext } from "react";
import { Context } from "@/app/NavWrapper";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const FeatureProduct = () => {
  const data = useContext(Context);

  return (
    <section className="w-full overflow-hidden md:mt-[6rem] h-full mx-auto">
      {/* HERO SECTION   */}
      <div className="w-[90vw] h-[70vh] bg-[#f3f3f3] md:mx-10">
        <div className="mx-auto flex  justify-between items-center ">
          <div className={`${roboto.className} text-5xl  font-semibold mx-28`}>
            {" "}
            Feature Product
          </div>

          <Image
            className="object-cover overflow-hidden"
            src="/featurebanner.png"
            alt="heroImage"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/*  FEATURE DISPLAY SECTION */}
      <div>
        <div className="mx-auto my-6 w-screen h-auto ">
          <div className="grid grid-cols-1 w-[80vw]  rounded-lg mx-auto  md:grid-cols-3  ">
            {data
              .map((item: any) => {
             
                return (
                  <div key={item.id} className="p-4">
                    <div className="w-[300px] overflow-hidden rounded-md border">
                      <Image
                        className="  h-[300px] object-fit p-4 w-[300px] rounded-md transation duration-500 hover:scale-110  "
                        src={item.image}
                        alt="images"
                        width={200}
                        height={200}
                      />
                      <div className="h-[1px] bg-[#c0c0ce] w-[95%] mx-auto"></div>
                      <Link href={`/feature/${item.id}`}>
                        <div className="p-4">
                          <h1 className="text-lg font-semibold">
                            {" "}
                            {item.title.split(" ").slice(0, 3).join(" ")}
                          </h1>
                          <p className="mt-3 text-sm font-bold text-gray-600">
                            {item.price} $
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
              .slice(0, 6)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
