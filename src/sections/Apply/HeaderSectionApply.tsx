"use client";

import { H1, Title } from "@app/components";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { useMediaQuery } from "@app/hooks";
import { ApplyPage } from "@app/types";
import { HeaderSectionWrapper } from "@app/sections";

interface HeaderSectionApplyProps {
  title: ApplyPage["title"];
  image: ApplyPage["image"];
}
const HeaderSectionApply = ({ title, image }: HeaderSectionApplyProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const circleSize = isMobile ? 200 : 325;

  return (
    <HeaderSectionWrapper>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for apply page"}
          width={350}
          height={200}
        />
      )}
      <Title className={"text-secondary text-center md:text-left"}>
        {title}
      </Title>
      <div className="flex justify-between items-center mt-4 md:mt-0">
        {isMobile && (
          <Image
            src={urlForImage(image)}
            alt={"Picture for apply page"}
            width={200}
            height={150}
          />
        )}
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
            Studenter som søker fra både NTNU og universiteter/høgskoler utenfor
            NTNU
          </p>
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionApply };
