"use client";

import { CernAndBostonPage } from "@app/types";
import { useMediaQuery } from "@app/hooks";
import { HeaderSectionWrapper } from "@app/sections";
import { SanityBlock, Title } from "@app/components";
import Image from "next/image";
import { urlForImage } from "@app/config";

interface BostonSectionProps {
  blocks: CernAndBostonPage["bostonContent"];
  image: CernAndBostonPage["bostonImage"];
}

const BostonSection = ({ blocks, image }: BostonSectionProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <HeaderSectionWrapper>
      <div className="md:mx-10">
        <div className="flex flex-row items-center justify-between">
          <Title className="text-accent text-4xl mx-auto md:mx-0">Boston</Title>
          {isMobile && (
            <Image
              src={urlForImage(image)}
              alt={"Picture for Boston section"}
              width={200}
              height={150}
            />
          )}
        </div>
        <div className="p-4 md:p-0">
          <SanityBlock blocks={blocks} />
        </div>
      </div>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for Boston section"}
          width={350}
          height={200}
        />
      )}
    </HeaderSectionWrapper>
  );
};

export { BostonSection };
