import { Fragment } from "react";
import { MdCategory, MdHome, MdPerson } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { NavigationIcon } from "./NavigationIcon";

const navigationItems = [
  { icon: MdHome, url: "/" },
  { icon: FaMoneyBillWave, url: "/spendings" },
  { icon: MdCategory, url: "/categories" },
  { icon: MdPerson, url: "/profile" },
] as const;

export function Navigation() {
  return (
    <nav className="absolute bottom-0 w-screen border-t border-gray-100 shadow-2xl">
      <ul className="flex justify-around max-w-2xl p-3 m-auto">
        {navigationItems.map(({ icon, url }) => (
          <Fragment key={url}>
            <NavigationIcon Icon={icon} url={url} />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
