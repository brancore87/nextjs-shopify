"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavigationProps {
  collections: Menu[];
  className?: string;
}

export default function MainNavigation({
  collections,
  className,
}: MainNavigationProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 space-y-3">
              {collections.map((collection) => (
                <li key={collection.path}>
                  <Link href={`${collection.path}`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "w-full justify-start whitespace-nowrap"
                      )}
                    >
                      {collection.title}
                    </NavigationMenuLink>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
