"use client";

import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface InstagramViewProps {
  urls: string[];
}

const InstagramView = ({ urls }: InstagramViewProps) => {
  return (
    <>
      {urls.map((url, index) => (
        <div
          className="flex justify-center items-center sm:mx-0 md:mx-4 "
          key={index}
        >
          <InstagramEmbed url={url} key={index} />
        </div>
      ))}
    </>
  );
};

export { InstagramView };
