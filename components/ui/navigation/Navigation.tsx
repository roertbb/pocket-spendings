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
    <nav className="absolute bottom-0 w-screen border-t shadow-2xl border-gray-50">
      <ul className="flex justify-around max-w-2xl p-4 m-auto">
        {navigationItems.map(({ icon, url }) => (
          <Fragment key={url}>
            <NavigationIcon Icon={icon} url={url} />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
