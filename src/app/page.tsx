import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Daniel Fuentes
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Software Engineer | Cloud Architect | AI Enthusiast
        </p>
        <div className="mt-10">
          <a
            href="mailto:admin@fuentesdaniel.com"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Say Hello
          </a>
        </div>
        <p className="mt-10 text-gray-600 dark:text-gray-300">
          Social media:
        </p>
        <div className="mt-4 flex justify-center gap-x-6">
          <a href="https://www.linkedin.com/in/daniel-a-fuentes/" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:underline">LinkedIn</a>
          <a href="https://github.com/fuentesdaniel0" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:underline">GitHub</a>
        </div>
      </div>
    </main>
  );
}