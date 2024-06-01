"use client";
import { logoFont } from "@/config/fonts";
import useSidebarStore from "@/store/sidebar.store";
import { InstagramIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebarStore();

  const sidebarStyle: CSSProperties = {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s",
    width: "100%",
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(5px)",
    zIndex: 40,
  };

  return (
    <div
      style={sidebarStyle}
      className="backdrop-blur-lg backdrop-brightness-[30%] touch-none"
    >
      <div className="px-6 pt-20">
        <button onClick={toggle} className="p-8 absolute top right-0">
          <X width={34} height={32} />
        </button>
        <Image
          className="invert"
          src="/imgs/blackcomettext.png"
          alt="Black comet"
          width={180}
          height={60}
        />
      </div>
      <div
        onClick={toggle}
        className={`grid gap-8 grid-cols-1 pt-12 ${logoFont.className} text-2xl`}
      >
        <Link className="hover:bg-slate-900 py-2 w-full pl-6" href="/">
          Inicio
        </Link>
        <Link className="hover:bg-slate-900 py-2 w-full pl-6" href="/products">
          Productos
        </Link>
        <Link className="hover:bg-slate-900 py-2 w-full pl-6" href="/about">
          Nosotros
        </Link>
        <Link
          className="hover:bg-slate-900 py-2 w-full pl-6"
          href="#contactanos"
        >
          Contactanos
        </Link>
        <Link
          className="hover:bg-slate-900 py-2 w-full pl-6"
          href="https://www.instagram.com/blackcomet3d/"
          target="_blank"
        >
          <InstagramIcon height={40} width={40} />
        </Link>
      </div>
    </div>
  );
};
