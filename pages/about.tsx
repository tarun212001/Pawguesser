import Head from "next/head";
import Link from "next/link";

const AboutPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Guess!</title>
      </Head>
      <main className="h-screen w-screen flex justify-center items-center gap-4 flex-col bg-psauGreen ">
        <h1 className="text-center text-4xl sm:text-7xl text-white font-Poppins font-bold tracking-wide">
          PawGuessr
        </h1>
        <div className="text-white text-center">
          Built with ❤️ using Next.js & Typescript
        </div>
        <h1 className="text-center text-2xl sm:text-5xl text-psauYellow font-Poppins font-bold tracking-wide"></h1>
        <div className="flex gap-2 font-Poppins font-semibold">
          <Link
            href="/"
            className="cursor-pointer flex px-4 py-4 items-center boxShadow text-black bg-gray-200 hover:scale-105 transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
