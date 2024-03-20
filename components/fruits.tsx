import Image, { StaticImageData } from "next/image";

interface fruitsProps {
  image: StaticImageData;
  title: string;
}
export default function Fruits({ image, title }: fruitsProps) {
  return (
    <div className="flex flex-col items-center font-bold">
      <Image
        src={image}
        width={100}
        height={100}
        alt="rocketfruit"
      />
      <p>{title}</p>
    </div>
  );
}
