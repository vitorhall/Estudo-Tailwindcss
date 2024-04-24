import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function NavPrimary({ children }: Props) {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      {children}
    </a>
  );
}
