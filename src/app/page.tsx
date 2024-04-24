import { Aside } from "@/components/Aside";
import { ButtonChevron } from "@/components/ButtonChevron";
import { CardMadeFor } from "@/components/CardMadeFor";
import { CardPlaylist } from "@/components/CardPlaylist";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <ButtonChevron>
              <ChevronLeft />
            </ButtonChevron>
            <ButtonChevron>
              <ChevronRight />
            </ButtonChevron>
          </div>

          <h1 className="font-semibold text-3xl mt-10 mb-4">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6">
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
            <CardPlaylist
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Westing Light"}
            />
          </div>

          <h2 className="font-semibold text-3xl mt-10 mb-4">
            Made for Vitor Hall
          </h2>
          <div className="grid grid-cols-9 gap-4">
            <CardMadeFor
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Daily mix 1"}
              subtitle={"Coin, girls in red end more"}
            />
            <CardMadeFor
              href={"/"}
              src={"/album.jpg"}
              alt={"Capa do album Westing Light"}
              title={"Daily mix 1"}
              subtitle={"Coin, girls in red end more"}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
