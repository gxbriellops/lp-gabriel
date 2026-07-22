import Image from "next/image";

type GlowProps = {
  src: string;
  className: string;
};

export function Glow({ src, className }: GlowProps) {
  return (
    <div className={className} aria-hidden="true">
      <Image src={src} alt="" fill sizes="100vw" priority />
    </div>
  );
}
