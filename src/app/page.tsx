"use client"

import { useState } from "react";
import { TopNav } from "../components/TopNav/TopNav";
import { SideNav } from "../components/SideNav/SideNav";
import { Footer } from "../components/Footer/Footer";
import { VDSphere } from "../components/VDSphere/VDSphere";
import { ImEye } from "react-icons/im";
import Image from "next/image";
import Typewriter from 'typewriter-effect'

export default function Home() {
  const [display, setDisplay] = useState("home");

  return (
    <main>
      <TopNav
        display={display}
        setDisplay={setDisplay}
      />
      <div className="h-[600px] grid grid-cols-4">
        {display === "home" && (
          <>
            <SideNav
              setDisplay={setDisplay}
            />
            <div className="z-10 col-start-2 col-end-4 self-center p-24 text-justify">
              <Image
                className="mx-auto"
                src="/visualdev.svg"
                alt=""
                width={100}
                height={50}
              />
              <hr className="text-pink pb-3" />
              <span>
              visualDev is a Web Development/SWE learning platform aimed at providing visual learning tools, along with supplemental resources, to allow you to learn by actually </span><ImEye className="scale-150 inline mx-1" fill="#ec4899" /><span> the workings of:</span>
              <div className="h-[100px] my-5 text-2xl text-center">
                <Typewriter
                  options={{
                    strings: [
                      "Lorem Ipsum 0",
                      "Lorem Ipsum 1",
                      "Lorem Ipsum 2",
                      "Lorem Ipsum 3",
                      "Lorem Ipsum 4",
                      "Lorem Ipsum 5",
                    ],
                    wrapperClassName:'',
                    cursorClassName: 'text-pink',
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            {/* ===== BACKGROUND ANIMATION ===== */}
            <VDSphere />
            {/* ===== BACKGROUND ANIMATION ===== */}
          </>
        )}
        {display !== "home" && (
          <div className="col-span-4 mx-7 my-3"></div>
        )}
      </div>
      <Footer />
    </main>
  )
}
