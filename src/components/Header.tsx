import React from "react";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import { getMenu } from "@/lib/shopify";
import Link from "next/link";

export default async function Header() {
  const products = await getMenu("next-js-frontend-header-menu");
  console.log(products);

  if (!products) return;

  return (
    <header className="flex justify-between mb-5 items-center px-7 py-5  top-0 w-full dark:bg-teal-900/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="text-2xl gap-3 flex">
        {products.map((product) => (
          <Link href={product.path} key={product.path}>
            {product.title}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
