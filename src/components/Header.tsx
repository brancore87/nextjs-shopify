import React from "react";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import { getMenu } from "@/lib/shopify";
import Link from "next/link";
import CartModal from "./cart/modal";
import Search from "./layout/navbar/search";
import MainNavigation from "./MainNavigation";

export default async function Header() {
  const products = await getMenu("next-js-frontend-header-menu");
  console.log(products);

  if (!products) return;

  return (
    <header className="flex gap-5 z-50 justify-between items-center px-7 py-5  top-0 w-full dark:bg-teal-900/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <Link href="/">
        <Logo />
      </Link>
      <MainNavigation collections={products} className="hidden lg:flex" />
      <div className="hidden justify-center md:flex md:w-1/3">
        <Search className="hidden max-w-96 lg:inline" />
      </div>
      <div className="flex justify-end md:w-1/3">
        <CartModal />
      </div>
      <ModeToggle />
    </header>
  );
}
