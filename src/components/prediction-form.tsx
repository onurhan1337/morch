import { FormEvent, useState } from "react";
import Image from "next/image";

const examplesForPrompts = [
  "A smiling face with sunglasses",
  "A face with a cowboy hat",
  "A face with a monocle",
  "A face with a medical mask",
  "A face with a party hat",
  "A face with a head bandage",
];

export default function PredictionForm() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   *
   * @param {FormEvent<HTMLFormElement>} e
   * @returns {Promise<void>}
   * @summary This function handles the form submission and makes a POST request to the /api/predictions endpoint to generate a memoji based on the user's input prompt.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.currentTarget.prompt.value,
      }),
    });
    let prediction = await response.json();
    setIsLoading(false);
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction?.[0]);
  };

  const handleRandomExample = () => {
    const randomExample =
      examplesForPrompts[Math.floor(Math.random() * examplesForPrompts.length)];
    const promptInput = document.getElementById("prompt") as HTMLInputElement;
    promptInput.value = randomExample;
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        <label htmlFor="prompt" className="sr-only">
          Prompt
        </label>
        <div className="flex items-center justify-center space-x-2 sm:w-96 w-full px-4 py-2">
          <input
            type="text"
            id="prompt"
            name="prompt"
            placeholder="Enter your prompt"
            className="sm:w-96 w-full px-4 py-2 border border-zinc-200 rounded-full text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            autoComplete="off"
            required
          />

          <button
            type="button"
            onClick={handleRandomExample}
            className="text-zinc-500 hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-4 rounded-full"
            aria-label="Random example"
          >
            <RandomGeneratorIcon />
          </button>
        </div>
        <SubmitButton isLoading={isLoading} />
      </form>

      <div className="aspect-[1/1] overflow-hidden rounded-lg relative mt-10">
        {prediction ? (
          <Image
            src={prediction}
            className="object-cover object-center"
            height="400"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
            alt={"Generated Memoji"}
          />
        ) : (
          <Image
            alt="Preview Morch"
            className="object-cover object-center"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
            priority
          />
        )}
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
      )}

      {prediction && (
        <div className="mt-4 flex justify-center">
          <a
            href={prediction}
            download="morch.png"
            className="bg-zinc-100 border border-zinc-200 text-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-200/80 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 text-center"
          >
            <span>Download</span>
          </a>
        </div>
      )}
    </section>
  );
}

const SubmitButton = ({ isLoading }: { isLoading: boolean }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="flex items-center justify-center space-x-2 sm:w-96 w-full mt-3 px-4 py-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-black disabled:text-white disabled:hover:bg-black disabled:hover:text-white"
  >
    <span>
      {isLoading ? "Generating your memoji..." : "Generate your memoji"}
    </span>
    {isLoading ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-loader animate-spin -rotate-90 -ml-1 mr-1"
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
        <path d="M12 6l0 -3" />
        <path d="M16.25 7.75l2.15 -2.15" />
        <path d="M18 12l3 0" />
        <path d="M16.25 16.25l2.15 2.15" />
        <path d="M12 18l0 3" />
        <path d="M7.75 16.25l-2.15 2.15" />
        <path d="M6 12l-3 0" />
        <path d="M7.75 7.75l-2.15 -2.15" />
      </svg>
    ) : (
      <ArrowRightIcon />
    )}
  </button>
);

const RandomGeneratorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrows-shuffle-2"
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
    <path d="M18 4l3 3l-3 3" />
    <path d="M18 20l3 -3l-3 -3" />
    <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
    <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-right"
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
    <path d="M5 12l14 0" />
    <path d="M13 18l6 -6" />
    <path d="M13 6l6 6" />
  </svg>
);
