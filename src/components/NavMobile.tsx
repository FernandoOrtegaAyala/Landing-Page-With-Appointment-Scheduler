import Link from "next/link";

export default function NavMobile() {
  return (
    <>
      <div
        id="navMobile"
        className="fixed top-10 z-50 hidden origin-top animate-open-menu bg-black bg-opacity-90 w-full h-full items-start justify-center pt-10 ">
        <div className="flex flex-col gap-10 text-3xl font-bold text-center text-white">
          <Link href="#" className="">
            Inicio
          </Link>
          <Link href="#" className="">
            Nosotros
          </Link>
          <Link href="#" className="">
            Maquinaria
          </Link>
          <Link href="#" className="">
            Testimonios
          </Link>
          <Link href="#" className="">
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
