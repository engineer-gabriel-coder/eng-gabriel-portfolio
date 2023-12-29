import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { Separator } from "@/components/ui/separator"


import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <Separator />
    <div className="w-full h-full bg-transparent text-gray-200 mt-20 shadow-lg px-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="mb-[20px] text-[15px] text-center">
                &copy; Eng Gabriel Dev 2024.
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer