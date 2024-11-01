"use client";

import { H1, Title } from "@app/components";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { useMediaQuery } from "@app/hooks";
import { ApplyPage } from "@app/types";
import { HeaderSectionWrapper } from "@app/sections";
import { useRef } from "react";

interface HeaderSectionApplyProps {
  title: ApplyPage["title"];
  image: ApplyPage["image"];
}
const HeaderSectionApply = ({ title, image }: HeaderSectionApplyProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const circleSize = isMobile ? 200 : 275;
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <HeaderSectionWrapper minHeight={imageRef?.current?.height}>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for apply page"}
          width={300}
          height={200}
          className={"absolute left-0 top-0"}
          ref={imageRef}
        />
      )}
      <div
        className={`w-11/12 md:w-full pl-0 md:pl-300 z-10 flex flex-col md:flex-row justify-center items-center`}
      >
        <div className="mx-auto">
          <Title className={"text-secondary text-center"}>{title}</Title>
        </div>
        <div className="flex justify-between items-center mt-4 md:mt-2 ml-0 md:ml-auto">
          <div
            style={{
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
            }}
            className="flex flex-col justify-center md:justify-evenly items-center bg-tertiary mr-2 md:mr-8 text-primary-foreground py-4 md:py-12 px-2 md:px-8"
          >
            <H1>SØKNADSFRIST</H1>
            <p className="text-4xl md:text-7xl">15.</p>
            <p className="text-2xl md:text-4xl">APRIL</p>
            <p className="text-center md:text-sm mt-1 md:mt-2 hidden mt:block">
              Studenter som søker fra både NTNU og universiteter/høgskoler
              utenfor NTNU
            </p>
          </div>
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionApply };
