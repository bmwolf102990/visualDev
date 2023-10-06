import React from "react";
import { ImEye } from "react-icons/im";
import Image from "next/image";
import Typewriter from 'typewriter-effect'

export const MissionStatement = () => {

    return(
        <div className="z-10 col-start-2 col-end-4 self-center p-32 text-justify">
              <Image
                className="mx-auto"
                src="/visualdev.svg"
                alt=""
                width={100}
                height={50}
              />
              <hr className="text-pink pb-3" />
              <span>
                visualDev is a learning platform focused on lowering the barrier-to-entry to computer coding and programming by providing visualization tools, along with supplemental resources, that allow you to learn SWE concepts by actually </span><ImEye className="scale-150 inline mx-1" fill="#ec4899" /><span> the workings of things like:</span>
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
    );
};
