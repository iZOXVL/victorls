"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, Button } from "@nextui-org/react";


export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])



  return (
    <Navbar>
      <NavbarBrand>
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              className='h-auto w-52'
              src="/imgs/1.png" />
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/gender/laptop"
          >
            Laptops
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/gender/pc"
          >
            PC
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/gender/accesorios"
          >
            Accesorios
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5" />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href={
            ((totalItemsInCart === 0) && loaded)
              ? '/empty'
              : "/cart"
          } className="mx-2">
            <div className="relative">
              {(loaded && totalItemsInCart > 0) && (
                <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-slate-950 text-white">
                  {totalItemsInCart}
                </span>
              )}
              <IoCartOutline className="w-5 h-5" />
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={openSideMenu}
            size='md'
            variant="flat"
            className='bg-black text-white'

          >
            Menú
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

// <nav className="flex px-5 justify-between items-center w-full color topbar" >
// 

//   

//   {/* Search, Cart, Menu */}
//   <div className="flex items-center">
//     <Link href="/search" className="mx-2">
//       <IoSearchOutline className="w-5 h-5" />
//     </Link>

//     <Link href={
//       ((totalItemsInCart === 0) && loaded)
//         ? '/empty'
//         : "/cart"
//     } className="mx-2">
//       <div className="relative">
//         {(loaded && totalItemsInCart > 0) && (
//           <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
//             {totalItemsInCart}
//           </span>
//         )}
//         <IoCartOutline className="w-5 h-5" />
//       </div>
//     </Link>

//     <button
//       onClick={openSideMenu}
//       className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
//     >
//       Menú
//     </button>
//   </div>
// </nav>