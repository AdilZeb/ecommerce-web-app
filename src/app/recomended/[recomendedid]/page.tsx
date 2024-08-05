"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const RecomendedDetails = (props: any) => {
  const [recomendeddata, setrecomendeddata] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${props.params.recomendedid}`
      );
      const data = await response.json();
      setrecomendeddata(data);
    }

    getData();
  });

  function handlebackshop() {
    router.push("/shop");
  }
  return (
    <section className="w-[90vw]  mt-[8rem] md:mt-[6rem] mx-auto">
      <section>
        <div className="hover:cursor-pointer">
          <span className="flex items-center p-4 m-2" onClick={handlebackshop}>
            <IoIosArrowRoundBack /> back to shop
          </span>
        </div>
        <div className=" flex w-[80vw] border border-[#c0c0ce] space-x-4 mx-auto">
          <div className="w-1/2">
            <Image
              className=" border p-2 border-l-[#c0c0ce]"
              src={recomendeddata.image}
              alt="image"
              width={400}
              height={400}
            />
          </div>
          <div className="p-10  w-1/2 space-y-6">
            <h1 className="text-2xl">{recomendeddata.title}</h1>
            <p className="text-sm">{recomendeddata.description}</p>
            <div className="h-[1px] bg-[#c0c0ce] w-full"></div>
            <p className="text-xl mt-7 font-bold">{recomendeddata.price}$</p>
            <button className="bg-black p-4 text-white">Add To Cart</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RecomendedDetails;
