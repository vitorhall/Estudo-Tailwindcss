import { HomeIcon, Library, Search } from "lucide-react";
import { NavPrimary } from "./NavPrimary";
import { NavSecondary } from "./NavSecondary";
import { Points } from "./Points";

export function Aside() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <Points />
      <nav className="space-y-5 mt-10">
        <NavPrimary>
          <HomeIcon />
          Home
        </NavPrimary>
        <NavPrimary>
          <Search />
          Search
        </NavPrimary>
        <NavPrimary>
          <Library />
          Your Library
        </NavPrimary>
      </nav>

      <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <NavSecondary>Hot hits Brasil</NavSecondary>
        <NavSecondary>Best of rock 90</NavSecondary>
        <NavSecondary>My playlist</NavSecondary>
        <NavSecondary>Incubus</NavSecondary>
        <NavSecondary>Barão vermelho</NavSecondary>
      </nav>
    </aside>
  );
}
