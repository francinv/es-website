"use client";

import Image from "next/image";
import { FooterSocials } from "./FooterSocials";
import { ContactInformation } from "./ContactInformation";
import { useMediaQuery } from "@app/hooks";

const Footer = () => {
  const isLargerThanMobileScreen = useMediaQuery("(min-width: 640px)");

  return (
    <footer className="flex flex-row justify-center md:justify-between items-center px-12 py-6 bg-primary">
      {isLargerThanMobileScreen && <ContactInformation />}
      <div className="flex justify-center items-center grow-0 sm:mt-2 md:mt-0">
        <Image
          src={"/NSE_White.png"}
          alt={"NSE Logo in white"}
          width={200}
          height={70}
        />
        <Image
          src={"/NTNU_White.png"}
          alt={"NTNU Logo in white"}
          width={200}
          height={64}
          className={"ml-4"}
        />
      </div>
      {isLargerThanMobileScreen && <FooterSocials />}
    </footer>
  );
};

export { Footer };
