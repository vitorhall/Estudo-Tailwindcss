import { Play } from "lucide-react";
import Image from "next/image";

type TypeCardPlaylist = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

export function CardPlaylist({ href, src, alt, title }: TypeCardPlaylist) {
  return (
    <a
      href={href}
      className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group"
    >
      <Image src={src} alt={alt} width={104} height={104} />
      <strong>{title}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
