"use client"

import { useState } from "react";
import { TopNav } from "../components/TopNav/TopNav";
import { SideNav } from "../components/SideNav/SideNav";
import { MissionStatement } from "../components/MissionStatement/MissionStatement";
import { VDSphere } from "../components/VDSphere/VDSphere";
import { ToolCanvas } from "../components/ToolCanvas/ToolCanvas";
import { Footer } from "../components/Footer/Footer";

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
            <MissionStatement />
            {/* ===== BACKGROUND ANIMATION ===== */}
            <VDSphere />
            {/* ===== BACKGROUND ANIMATION ===== */}
          </>
        )}
        {display !== "home" && (
          <ToolCanvas 
            display={display}
            setDisplay={setDisplay}
          />
        )}
      </div>
      <Footer />
    </main>
  )
}
