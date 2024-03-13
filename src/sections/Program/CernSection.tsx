"use client";

import { CernAndBostonPage } from "@app/types";
import { useMediaQuery } from "@app/hooks";
import { HeaderSectionWrapper } from "@app/sections";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { SanityBlock, Title } from "@app/components";

interface CernSectionProps {
  blocks: CernAndBostonPage["cernContent"];
  image: CernAndBostonPage["cernImage"];
}

const CernSection = ({ blocks, image }: CernSectionProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <HeaderSectionWrapper>
      {!isMobile && (
        <Image
          src={urlForImage(image)}
          alt={"Picture for CERN section"}
          width={350}
          height={200}
        />
      )}
      <div className="md:mx-10">
        <div className="flex flex-row items-center justify-between">
          {isMobile && (
            <Image
              src={urlForImage(image)}
              alt={"Picture for CERN section"}
              width={200}
              height={150}
            />
          )}
          <Title className="text-accent text-4xl mx-auto md:mx-0">CERN</Title>
        </div>
        <div className="p-4 md:p-0">
          <SanityBlock blocks={blocks} />
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { CernSection };
