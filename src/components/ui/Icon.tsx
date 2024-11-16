import Image from "./Image";

type IconProps = {
  src: string;
  link?: string;
};

export default function Icon({ src, link }: IconProps) {
  return (
    <a
      className="opacity-60 transition-transform hover:scale-125 hover:opacity-100"
      href={link}
      target="_blank"
    >
      <Image src={src} />
    </a>
  );
}
