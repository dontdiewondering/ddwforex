import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <>
      <Head>
        <title>DDWForex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Khoomi" key="title" />
      </Head>
      <div
        className="bg-white min-h-screen md:h-screen flex w-full justify-center items-center overflow-y-hidden"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <div className="flex flex-col relative justify-center items-center gap-y-1">
          <div className="block w-full max-w-72 h-auto">
            <Image
              src="/logo.png"
              alt="DDWforex Logo"
              width="220"
              height="53"
            />
          </div>
          <div className="text-xs md:text-medium font-bold tracking-widest antialiased">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Forex Automation`)
                  .pauseFor(1500)
                  .deleteChars(28)
                  .typeString(`Don't Die Wondering`)
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
        <Link href="mailto:support@ddw.forex" passHref>
          <div className="absolute bottom-2 text-xs font-light tracking-widest antialiased cursor-pointer">
            support@ddw.forex
          </div>
        </Link>
      </div>
    </>
  );
}
