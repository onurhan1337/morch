import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center h-16 sm:h-20 sm:pt-2 pt-4 border-t mt-5 sm:flex-row flex-col space-y-3 sm:mb-0 mb-3 flex justify-between items-center w-full border-zinc-200 pb-7 sm:px-4 px-2
    "
    >
      <div>
        <span>
          Powered by{" "}
          <Link href="https://replicate.com/fofr/sdxl-emoji" passHref>
            <span
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            font-semibold transition-colors duration-150 ease-in-out tracking-wider"
            >
              sdxl-emoji
            </span>{" "}
          </Link>
          and{" "}
          <Link href="https://replicate.com" passHref>
            <span
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            font-semibold transition-colors duration-150 ease-in-out tracking-wider"
            >
              Replicate
            </span>
          </Link>
        </span>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link href="https://x.com/onurhan1337" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Link>
        <Link href="https://github.com/onurhan1337" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
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
        </Link>
      </div>
    </footer>
  );
}
