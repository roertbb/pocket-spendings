import { ReactNode } from "react";

interface HeaderProps {
  children: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
}

export function Header({ children, leftAction, rightAction }: HeaderProps) {
  return (
    <header className="border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between max-w-2xl p-3 m-auto">
        <div className="flex w-10">{leftAction}</div>
        <h1 className="text-2xl font-bold">{children}</h1>
        <div className="flex w-10">{rightAction}</div>
      </div>
    </header>
  );
}
