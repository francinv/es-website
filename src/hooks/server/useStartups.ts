"use client";

import { useEffect, useState } from "react";
import { Startup } from "@app/types";
import { client } from "@app/config";

const useStartups = (currentValue: string) => {
  const [startups, setStartups] = useState<Startup[]>([]);

  const fetchStartups = async (isInHouse: boolean) => {
    const baseQuery = `
      {
          name,
          description,
          url,
          logo,
          linkedin,
          mail,
          isInHouse
      }
   `;

    const query = isInHouse
      ? `*[_type == "startup" && isInHouse == true] ${baseQuery}`
      : `*[_type == "startup" && (isInHouse == false || !defined(isInHouse))] ${baseQuery}`;

    const params = { isInHouse };
    const data = await client.fetch<Startup[]>(query, params);
    setStartups(data);
  };

  useEffect(() => {
    void fetchStartups(currentValue === "inhouse");
  }, [currentValue]);

  return { startups };
};

export { useStartups };
