import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function NavSecondary({ children }: Props) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {children}
    </a>
  );
}
