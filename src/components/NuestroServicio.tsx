import Image from "next/image";

export default function NuestroServicio() {
  return (
    <>
      <div className="bg-primary">
        <h2 className="text-current font-black text-3xl text-center py-6">
          Nuestro servicio
        </h2>
        <div className="relative bg-primary w-full h-96">
          <Image
            className=""
            layout="fill"
            objectFit="cover"
            alt="Nuestro servicio imagen"
            sizes="100vw"
            src="/NuestroServicio2.png"></Image>
        </div>
      </div>
    </>
  );
}
