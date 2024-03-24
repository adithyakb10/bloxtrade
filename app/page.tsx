import Fruits from "@/components/fruits";
import bloxfruit from "@/public/Bloxfruit.webp";
import rocket from "@/public/RocketFruit.webp";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center w-full font-fuzzy h-screen">
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-5xl text-center">
            Welcome To <span className="text-red-600 italic">BloxTrade</span>
          </h1>
          <p className="text-2xl mt-5 text-center">
            This is a website to guide and help in bloxfruit trading
          </p>
          <Image
            className="w-60"
            src={bloxfruit}
            alt="bloxfruit"
            height={1000}
            width={1000}
          />
        </div>
        <p className="w-full md:w-2/4 font-mono text-xl">
          Blox Fruits are named after what they do and are mysterious fruits
          that can be found across various locations in the game. When eaten,
          they grant the consumer a supernatural ability, with each fruit having
          its own distinct power
        </p>
      </div>
    </div>
  );
}
