import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function ButtonChevron({ children }: Props) {
  return <button className="rounded-full bg-black/40 p-1">{children}</button>;
}
