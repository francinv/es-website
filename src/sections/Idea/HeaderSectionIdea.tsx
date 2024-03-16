"use client";

import { HeaderSectionWrapper } from "@app/sections";
import Image from "next/image";
import { urlForImage } from "@app/config";
import { H2, Title } from "@app/components";
import { useMediaQuery } from "@app/hooks";
import { IdeaPage } from "@app/types";
import Link from "next/link";

interface HeaderSectionIdeaProps {
  title: IdeaPage["title"];
  image: IdeaPage["image"];
}

const HeaderSectionIdea = ({ title, image }: HeaderSectionIdeaProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

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
      {!isMobile && (
        <Title className={"text-secondary text-center md:text-left"}>
          {title}
        </Title>
      )}
      <div className="flex flex-col md:flex-row mt-4 md:mt-0">
        {isMobile && (
          <div className="flex flex-row justify-between items-center mb-4">
            <Image
              src={urlForImage(image)}
              alt={"Picture for apply page"}
              width={200}
              height={150}
            />
            <Title className={"text-secondary text-center md:text-left flex-1"}>
              {title}
            </Title>
          </div>
        )}
        <div className="px-6 py-4 bg-tertiary rounded-xl text-tertiary-foreground w-4/5 md:w-[350px] mr-auto md:mr-6 ml-auto md:ml-0">
          <H2 className="text-center">Our values</H2>
          <ol className="ml-6 mt-2 space-y-1 list-decimal">
            <li>
              Take a look at the{" "}
              <Link
                href={"/Feasibility-studies-2018.pdf"}
                className="underline"
              >
                Feasibility studies
              </Link>{" "}
              presentation for more information.
            </li>
            <li>
              Contact our feasibility study facilitators, by mail:{" "}
              <Link
                href={"mailto:ide.entreprenorskolen@ntnu.no"}
                className="underline"
              >
                ide.entreprenorskolen@ntnu.no
              </Link>
              . They will keep an ongoing dialog with you during the entire
              process.
            </li>
            <li>
              Fill out a{" "}
              <Link href={"/NSE-one-pager.pptx"} className="underline">
                NSE one pager
              </Link>{" "}
              of your business idea and submit it to the facilitators within
              Tuesday, a week before the feasibility week start. The one slider
              will be used for screening and presenting the business idea.
            </li>
          </ol>
        </div>
      </div>
    </HeaderSectionWrapper>
  );
};

export { HeaderSectionIdea };
