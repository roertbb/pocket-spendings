import Link from "next/link";
import { useRouter } from "next/router";
import { IconBase } from "react-icons";
import cn from "classnames";

interface NavigationIconProps {
  Icon: typeof IconBase;
  url: string;
}

export function NavigationIcon({ Icon, url }: NavigationIconProps) {
  const router = useRouter();
  const active = router.pathname === url;

  return (
    <li>
      <Link href={url}>
        <a>
          <Icon
            className={cn(
              "w-10 h-10 p-2 transition-all rounded-xl",
              { "fill-gray-600": !active },
              { "bg-blue-100 fill-blue-400": active }
            )}
          />
        </a>
      </Link>
    </li>
  );
}