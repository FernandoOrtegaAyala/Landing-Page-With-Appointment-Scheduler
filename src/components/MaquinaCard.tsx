import Image from "next/image";

export default function MaquinaCard() {
  return (
    <>
      <div className="relative w-full h-80 flex flex-col">
        <Image
          className=""
          layout="fill"
          objectFit="cover"
          alt="Maquina img"
          sizes="100vw"
          src="/Bomba28.png"></Image>
        <div className="w-full h-20 bg-background"></div>
        <div className="absolute w-full h-full bg-black bg-opacity-20 flex items-center justify-center"></div>
      </div>
    </>
  );
}
