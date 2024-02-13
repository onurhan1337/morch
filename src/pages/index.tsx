import { Inter } from "next/font/google";
import Cta from "@/components/cta";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Morch - AI based emoji generator</title>
        <meta
          name="description"
          content="Morch is an AI based emoji generator that helps you create custom emojis for your projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-fit flex-col items-center justify-between p-12 sm:p-24 ${inter.className}`}
      >
        <Cta />
      </main>
    </>
  );
}
