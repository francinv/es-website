"use client";

import { usePathname } from "next/navigation";
import { PROGRAM_LINKS } from "@app/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Title,
} from "@app/components";
import Link from "next/link";
import { useMediaQuery } from "@app/hooks";

const ProgramHeader = () => {
  const pathname = usePathname();
  const pageTitle =
    PROGRAM_LINKS.find(({ link }) => link === pathname)?.title ||
    "Program structure";
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="px-8">
      <Title className="text-secondary">{pageTitle}</Title>
      <NavigationMenu className="flex">
        <NavigationMenuList className="items-start md:items-center">
          {PROGRAM_LINKS.map(({ link, title }, idx) => {
            const paddingStyle = idx === 0 || isMobile ? "pl-0 pr-4" : "px-4";

            return (
              <NavigationMenuItem key={link}>
                <Link href={link} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${paddingStyle}`}
                    active={pathname === link}
                  >
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export { ProgramHeader };
