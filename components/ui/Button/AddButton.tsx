import Link from "next/link";
import { MdAdd } from "react-icons/md";

interface AddButtonProps {
  url: string;
}

export function AddButton({ url }: AddButtonProps) {
  return (
    <Link href={url}>
      <a className=" rounded-xl">
        <MdAdd className="w-10 h-10 p-2 transition-all fill-gray-600 rounded-xl" />
      </a>
    </Link>
  );
}
