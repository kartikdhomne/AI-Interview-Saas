import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid h-screen place-content-center p-4">
        <a href="#"
          className="block animate-background rounded-full bg-gradient-to-r from-red-600 via-green-600 to-blue-600 bg-[length:400%_400%] p-1">
          <span className="block rounded-full bg-white text-black px-10 py-4 text-lg font-medium">
            Hello there 👋
          </span>
        </a>
      </div>
    </div>
  );
}
