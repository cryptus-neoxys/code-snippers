import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 py-2 m-0 bg-blue-400">
      <Head>
        <title>Code-Snippers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py flex flex-col items-center justify-start flex-1 px-20 m-0 text-center bg-white">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Code-Snippers
          </a>
        </h1>
      </main>
    </div>
  );
}
