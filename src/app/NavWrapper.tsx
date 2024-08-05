"use client";
import React, { createContext, useEffect, useState } from "react";
import NavBar from "./(component)/navbar/page";
import Footer from "./(component)/footer/page";

export const Context = createContext([]);
const NavWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Context.Provider value={products}>
      <NavBar />
      {children}
      <Footer />
    </Context.Provider>
  );
};

export default NavWrapper;
