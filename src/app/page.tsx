"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import RecomendedProduct from "./recomended/page";
import FeatureProduct from "./feature/page";
import Link from "next/link";
import { Context } from "./NavWrapper";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const data = useContext(Context);
  const router = useRouter();
  return (
    <main className="w-full  mx-auto">
      <HomeData router={router} />
      <FeaturePage data={data} router={router} />
      <ReconmendedPage data={data} router={router} />
    </main>
  );
}

function FeaturePage({ data, router }: any) {
  return (
    <div>
      <div className="p-8  flex justify-between mx-10 md:mx-20">
        <div>
          <h1 className="text-2xl font-bold">Feature Products</h1>
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            router.push("/feature");
          }}
        >
          <h3 className="text-sm underline">See All</h3>
        </div>
      </div>
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
  );
}
function ReconmendedPage({ data, router }: any) {
  return (
    <div>
      <div className="p-4 flex justify-between mx-10 md:mx-20">
        <div>
          <h1 className="text-2xl font-bold">Recomended Products</h1>
        </div>
        <div
          className="hover:cursor-pointer"
          onClick={() => {
            router.push("/recomended");
          }}
        >
          <h3 className="text-sm underline">See All</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 w-[80vw]  rounded-lg mx-auto  md:grid-cols-3  ">
        {data
          .map((item: any) => {
            return (
              <div key={item.id} className="p-4">
                <div className="overflow-hidden  rounded-md border">
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
  );
}
function HomeData({ router }: any) {
  return (
    <>
      <div className="flex flex-col justify-center bg-[#f3f3f3] items-center box-border mx-auto min-w-screen h-screen">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-2  w-full h-[80vh]">
          <div className="bg-[#f3f3f3]  md:space-y-3  p-10">
            <h1 className="text-5xl p-4">
              <em className="text-5xl  font-bold">See</em> everything with{" "}
              <em className="text-5xl  font-bold">Clarity</em>
            </h1>
            <p className="text-xl p-4">
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <button
              className="bg-black p-2 text-white md:ml-5 flex justify-center items-center "
              onClick={() => router.push("/shop")}
            >
              Shop Now{" "}
              <span>
                <IoIosArrowRoundForward size={30} />
              </span>
            </button>
          </div>
          <div className=" ">
            <Image
              src="/heroimage.png"
              alt="heroImage"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
}
