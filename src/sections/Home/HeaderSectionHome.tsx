"use client";

import Image from "next/image";
import { urlForImage } from "@app/config";
import { Button, H2, Title } from "@app/components";
import Link from "next/link";
import { useMediaQuery } from "@app/hooks";
import { HomePage } from "@app/types";
import { HeaderSectionWrapper } from "@app/sections";

interface HeaderSectionHomeProps {
  title: HomePage["title"];
  description: HomePage["description"];
  image: HomePage["image"];
}

const HeaderSectionHome = ({
  title,
  image,
  description,
}: HeaderSectionHomeProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <HeaderSectionWrapper>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for home page"}
          width={350}
          height={200}
        />
      )}
      <div className="w-full flex flex-col justify-center items-center">
        <Title className={"text-secondary text-center md:text-left"}>
          {title}
        </Title>
        <div className="flex flex-row md:flex-col justify-between items-center w-full">
          {isMobile && (
            <Image
              src={urlForImage(image)}
              alt={"Picture for apply page"}
              width={200}
              height={150}
            />
          )}
          <H2 className="mt-2 w-3/5 text-center hidden md:block">
            {description}
          </H2>
          <div className="mt-2 flex flex-col md:flex-row justify-center items-center">
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full md:w-1/2 mr-2"
            >
              <Link href={"/idea"}>Do you have an idea?</Link>
            </Button>
            <Button
              variant="default"
              asChild
              size="lg"
              className="w-full md:w-1/2 ml-0 md:ml-2 mr-2 md:mr-0 mt-2 md:mt-0"
            >
              <Link href={"/sok"}>How to apply</Link>
            </Button>
          </div>
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionHome };
