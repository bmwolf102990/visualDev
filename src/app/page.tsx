"use client"

import { useState } from "react";
import { TopNav } from "../components/TopNav/TopNav";
import { SideNav } from "../components/SideNav/SideNav";
import { Footer } from "../components/Footer/Footer";
import { VDSphere } from "../components/VDSphere/VDSphere";
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
            {/* <div className="col-start-2 col-end-4 text-center">
              <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat eum eos totam quam ab perspiciatis incidunt necessitatibus recusandae porro, architecto nesciunt harum laudantium mollitia, adipisci quos ducimus debitis vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
              <Typewriter
                options={{
                  strings: [
                    "string 1",
                    "string 2"
                  ],
                  wrapperClassName:'text-pink',
                  cursorClassName: '',
                  autoStart: true,
                  loop: true,
                }}
              />
            </div> */}
            <VDSphere />
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
