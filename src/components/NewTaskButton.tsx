import Link from "next/link";
import { Plus } from "lucide-react";

export default function NewTaskButton() {
  return (
    <>
      <Link
        href="/crear"
        className="fixed bottom-16 right-5 md:right-16 z-[100] w-16 h-16  bg-white rounded-full flex items-center justify-center">
        <Plus className="w-12 h-12 text-primary" />
      </Link>
    </>
  );
}
