import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";

export default async function Footer() {
  const menu = await getMenu("next-js-frontend-footer-menu");
  const date = new Date();
  return (
    <footer className="px-7 flex py-5 bottom-0 w-full bg-teal-900/40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-center">
      <small className="opacity-50">
        &copy; BRANCODE <time>{date.getFullYear().toString()}</time> | All
        rights reserved
      </small>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {menu.length > 0 ? (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="text-gray-700 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </footer>
  );
}
