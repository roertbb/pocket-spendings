interface HeaderProps {
  children: string;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-center max-w-2xl p-3 m-auto">
        <h1 className="text-2xl font-bold">{children}</h1>
      </div>
    </header>
  );
}
