"use client";
import { logoFont } from "@/config/fonts";
import { Menu, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useSidebarStore from "@/store/sidebar.store";
import useCartStore from "@/store/cart.store";
// import useStore from "@/store/useStore";

export const TopMenu = () => {
  const { items } = useCartStore();
  // const items = useStore(useCartStore, (state) => state.items);
  const { isOpen, toggle } = useSidebarStore();
  return (
    <div>
      <nav className="flex px-6 sm:px-14 justify-between items-center w-full pt-2 pb-4 mx-auto max-w-[1200px]">
        {/* logo */}
        <div>
          <Link rel="stylesheet" href="/" className="flex">
            <span
              className={`${logoFont.className} antialiased font-semibold text-2xl uppercase flex mt-2`}
            >
              <Image
                className=" invert"
                src={"/imgs/blackcomettext.png"}
                alt="Black comet"
                height={60}
                width={180}
              />
            </span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList
            className={`${logoFont.className} font-bold gap-8 pt-6 uppercase hidden sm:flex`}
          >
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Productos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Colecciones
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Nosotros
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cart">
                <div className="relative">
                  <span className="absolute text-xs rounded-full bg-blue-600 -top-2 -right-2 px-1 font-sans">
                    {items
                      ? items.reduce((sum, item) => sum + item.quantity, 0)
                      : 0}
                  </span>

                  <ShoppingCartIcon width={24} height={24} className="mb-1" />
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4 md:hidden pt-8">
          <Link className="" href={"/cart"}>
            <div className="relative">
              <span className="absolute text-xs rounded-full bg-blue-600 -top-2 -right-2 px-1 font-sans">
                {items
                  ? items.reduce((sum, item) => sum + item.quantity, 0)
                  : 0}
              </span>

              <ShoppingCartIcon width={24} height={24} className="mb-1" />
            </div>
          </Link>
          <button className="" onClick={toggle}>
            <Menu width={32} height={32} className="mb-1" />
          </button>
        </div>
      </nav>
    </div>
  );
};
