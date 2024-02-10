import { Inter } from "next/font/google";
import Cta from "@/components/cta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-fit flex-col items-center justify-between p-12 sm:p-24 ${inter.className}`}
    >
      <Cta />
    </main>
  );
}
