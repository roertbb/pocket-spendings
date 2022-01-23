import Link from "next/link";
import { MdAdd } from "react-icons/md";

interface AddButtonProps {
  url: string;
}

export function AddButton({ url }: AddButtonProps) {
  return (
    <div className="absolute flex justify-center w-full bottom-20">
      <Link href={url}>
        <a className="block p-2 bg-blue-400 rounded-3xl">
          <MdAdd className="w-10 h-10 fill-white" />
        </a>
      </Link>
    </div>
  );
}
