import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b border-zinc-200 pb-7 sm:px-4 px-2">
      <div className="flex space-x-3 items-center">
        <Image src="/avatar.png" alt="logo" width={40} height={40} />
        <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight text-zinc-800">
          <Link href="/" className="hover:underline">
            morch
          </Link>
        </h1>
      </div>

      <Link
        href="https://github.com/onurhan1337/morch"
        target="_blank"
        passHref
      >
        <button
          className="flex items-center space-x-2 bg-gradient-to-tr
            from-zinc-100 via-zinc-300 to-zinc-100 text-zinc-700
           px-3 py-2 rounded-full border border-zinc-300
              hover:bg-gradient-to-tr hover:from-zinc-100 hover:via-zinc-200 hover:to-zinc-100
           transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2
           "
          aria-label="Star On Github"
        >
          <GithubIcon />
          <span>Github</span>
        </button>
      </Link>
    </header>
  );
}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);
