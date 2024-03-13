import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./NavigationMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ResponsiveNavigationMenu = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="block md:flex mx-auto md:mx-0">
      <NavigationMenuList>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/students" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/students"}
            >
              Students
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/startups" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/startups"}
            >
              Startups
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/program" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/program"}
            >
              Program
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/about"}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/contact"}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-4 md:my-0">
          <Link href="/sok" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-tertiary text-tertiary-foreground px-8 py-2 font-medium transition-colors">
              Søk
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { ResponsiveNavigationMenu };
