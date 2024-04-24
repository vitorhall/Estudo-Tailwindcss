import Image from "next/image";

type PropsMadeFor = {
  href: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

export function CardMadeFor({ href, src, alt, title, subtitle }: PropsMadeFor) {
  return (
    <a
      href={href}
      className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
    >
      <Image
        className="w-full rounded-md"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-500">{subtitle}</span>
    </a>
  );
}
