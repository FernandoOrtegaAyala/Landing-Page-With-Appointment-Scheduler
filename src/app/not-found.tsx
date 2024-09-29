import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className="inline-block text-3xl  md:text-6xl border-r-2 mr-4 px-2">
            404
          </h1>
          <div className="inline-block text-xl md:text-3xl">
            <h2 className="">Página no encontrada.</h2>
          </div>
        </div>
        <Link
          href="/"
<<<<<<< HEAD
          className="mt-5 px-6 py-2 md:text-2xl rounded-md bg-primary text-white hover:bg-primary/90 ">
=======
          className="mt-5 px-6 py-2 md:text-2xl rounded-md bg-primary text-primary-foreground hover:bg-primary/90 ">
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
          Inicio
        </Link>
      </div>
    </>
  );
}
