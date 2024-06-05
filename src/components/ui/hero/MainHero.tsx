"use client";
import {
  BugPlay,
  LucideView,
  PackageOpenIcon,
  View,
  ViewIcon,
} from "lucide-react";
import React, { useRef, useEffect } from "react";
import { Button } from "../button";

export const MainHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg w-full h-[450px] md:h-[650px] shadow-2xl shadow-gray-900">
      <div className="absolute md:w-1/3 top-0 md:top-1/2 md:-translate-y-1/2 left-0 z-30 py-8 px-8 md:px-10 ">
        <h1 className="text-2xl font-bold uppercase">
          Nueva Colección MOUSIN warriors!
        </h1>
        <h2 className="mt-2 opacity-95 text-sm">
          Elige entre más de 10 figurines de colección o compra el set completo
          con una oferta exclusiva.
        </h2>
        <Button className="mt-4 w-full hidden md:flex ">
          <PackageOpenIcon className="mr-2" height={24} width={24} /> Ver
          Colección
        </Button>
      </div>
      <div className="absolute bottom-0 z-30 p-8 w-full md:w-1/3 md:hidden">
        <Button className="mt-4 w-full">
          <PackageOpenIcon className="mr-2" height={24} width={24} /> Ver
          Colección
        </Button>
      </div>
      <div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full top-0 left-0 object-cover z-10 shadow-inner"
        >
          <source
            src="https://blackcomet-storage.s3.us-east-2.amazonaws.com/mousinrender3d.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b md:bg-gradient-to-r from-[#000072ec] via-[#000072ad] via-20% to-[rgba(44,83,100,0)] z-20"></div>
      </div>
    </div>
  );
};
