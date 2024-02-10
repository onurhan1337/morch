import PredictionForm from "./prediction-form";

export default function Cta() {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-0 sm:mt-10">
      <h2 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-center text-zinc-900">
        Generate your own memoji with using AI
      </h2>
      <p className="sm:text-lg text-base text-zinc-600 mt-3 text-balance text-center">
        Write a prompt and let the AI generate an memoji for you.
      </p>
      <div className="mt-5">
        <PredictionForm />
      </div>
    </section>
  );
}
