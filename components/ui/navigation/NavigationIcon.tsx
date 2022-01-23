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
  const active =
    url === "/" ? url == router.pathname : router.pathname.startsWith(url);

  return (
    <li>
      <Link href={url}>
        <a>
          <Icon
            className={cn(
              "w-10 h-10 p-2 transition-all rounded-2xl",
              !active && "fill-gray-600",
              active && "bg-blue-100 fill-blue-400"
            )}
          />
        </a>
      </Link>
    </li>
  );
}
