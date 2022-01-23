import { ReactNode } from "react";
import cn from "classnames";

const variantToClassNames = {
  primary: "bg-blue-400 hover:shadow-md hover:bg-blue-500 active:shadow-lg",
} as const;

interface ButtonProps {
  variant?: "primary";
  children: ReactNode;
}

export function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full px-4 py-2 text-white transition-all rounded-lg",
        variantToClassNames[variant]
      )}
      type="submit"
    >
      {children}
    </button>
  );
}
