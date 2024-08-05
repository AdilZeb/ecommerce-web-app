"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const FeatureDetails = (props: any) => {
  const [featuredata, setfeaturedata] = useState([]);
  const [value, setvalue] = useState(1);
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${props.params.featureid}`
      );
      const data = await response.json();
      setfeaturedata(data);
    }
    getData();
  }, []);
  function handleback() {
    router.push("/shop");
  }
  return (
    <section className="w-[90vw]  mt-[8rem] md:mt-[6rem] mx-auto">
      <section>
        <div className="hover:cursor-pointer " onClick={handleback}>
          <span className="flex items-center p-4 m-2">
            <IoIosArrowRoundBack /> back to shop
          </span>
        </div>
        <div className=" flex w-[80vw] border border-[#c0c0ce] space-x-4 mx-auto">
          <div className="w-1/2">
            <Image
              className=" border p-2 border-l-[#c0c0ce]"
              src={featuredata.image}
              alt="image"
              width={400}
              height={400}
            />
          </div>
          <div className="p-10  w-1/2 space-y-6">
            <h1 className="text-2xl">{featuredata.title}</h1>
            <p className="text-sm">{featuredata.description}</p>
            <div className="h-[1px] bg-[#c0c0ce] w-full"></div>
            <label>Choose an option:</label>
            <select
              value={value}
              onChange={(e:any) => setvalue(e.target.value)}
              className="bg-slate-300 p-2 w-[300px] h-[20px] text-white"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <p className="text-xl mt-7 font-bold">
              {featuredata.price * value}$
            </p>
            <button className="bg-black p-4 text-white">Add To Cart</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureDetails;
