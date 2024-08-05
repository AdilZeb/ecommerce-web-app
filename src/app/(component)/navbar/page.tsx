"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const wishlistdata = JSON.parse(localStorage.getItem("cartdata")) || [];

  function removesingleItem(id: any) {
    const deleteitem = wishlistdata.filter((item: any) => item.id !== id);
    localStorage.setItem("cartdata", JSON.stringify(deleteitem));
  }
  function removewishlist() {
    localStorage.removeItem("cartdata");
  }
  return (
    <nav className="min-w-full h-[5rem] flex item-center p-4  justify-between  bg-[#f9f9f9] fixed top-0">
      <div className="flex items-center  space-x-10">
        <div className="flex">
          <Image src={"/navicon.png"} alt="logo" width={100} height={100} />
        </div>
        <div className="flex space-x-5">
          <Link href={"/"} className="text-sm">
            Home
          </Link>
          <Link href={"/shop"} className="text-sm">
            Shop
          </Link>
          <Link href={"/feature"} className="text-sm">
            Featured
          </Link>
          <Link href={"/recomended"} className="text-sm">
            Recomended
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex  space-x-5">
          <div className="flex items-center justify-center">
            <span className="flex items-center bg-white">
              {" "}
              <CiSearch />
              <input placeholder=" Search" className="h-8 outline-none"></input>
            </span>
            <span
              className="p-2 hover:bg-slate-200"
              onClick={() => setOpen(!open)}
            >
              <button className="p-[10px] relative ">
                <IoBag />
                <span
                  className={` ${
                    wishlistdata?.length > 0
                      ? "text-xs flex flex-end justify-center items-center rounded-full bg-red-500 text-white p-2 h-1 w-1 absolute top-0 right-0"
                      : "null"
                  }  `}
                >
                  {wishlistdata?.length > 0 ? wishlistdata?.length : null}
                </span>
              </button>
            </span>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-black p-2 text-white
            "
            >
              Signup
            </button>
            <button className="bg-slate-300 p-2 text-white">Signin</button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="absolute top-0    duration-1000 right-0 w-[30rem] mx-10 h-[100vh] bg-white">
          <div className="overflow-hidden h-[90vh] ">
            <div className="flex top-0 justify-between items-center">
              <h1 className="p-2 block">
                My Basket <span>Item({wishlistdata?.length})</span>
              </h1>

              <div>
                <button
                  className="p-1 border  border-black"
                  onClick={() => setOpen(false)}
                >
                  close
                </button>
                <button
                  className="p-1 border  border-black"
                  onClick={removewishlist}
                >
                  ClearBasket
                </button>
              </div>
            </div>
            <div className="p-2  mt-3">
              {wishlistdata &&
                wishlistdata.map((item: any) => (
                  <div
                    key={item.id}
                    className="p-4  flex border border-black items-center justify-between w-[100%]"
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      width={40}
                      height={40}
                    />
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                    <button
                      className="px-2 py-1 border  border-black"
                      onClick={() => removesingleItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="p-2  mbbottom-0">
            Sub total Amount:
            {wishlistdata?.reduce((a: any, b: any) => a + b.price, 0)}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
