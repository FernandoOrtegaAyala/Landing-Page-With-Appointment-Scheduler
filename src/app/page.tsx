import FooterComponente from "@/components/FooterComponente";
import HeroComponent from "@/components/HeroComponent";
import Highlights from "@/components/Highlights";
import MaquinaCard from "@/components/MaquinaCard";
import NavbarComponent from "@/components/NavbarComponent";
import NuestroServicio from "@/components/NuestroServicio";

export default function HomePage() {
  return (
    <>
      <div className="bg-background h-screen w-full">
        <NavbarComponent />
        <HeroComponent />
        <Highlights />
        <div className="bg-background w-full px-6 h-auto">
          <h2 className="text-current font-black text-3xl text-center py-6">
            Maquinaria
          </h2>
          <MaquinaCard />
        </div>
        <NuestroServicio />
        <FooterComponente />
      </div>
    </>
  );
}
