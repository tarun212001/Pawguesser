import Typography from "@mui/material/Typography";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  return {
    props: {}
  };
};

const Tutorial: React.FC = () => {
  const router = useRouter();

  return (
    <main className="h-screen w-screen flex justify-center items-center gap-4 flex-col bg-psauGreen text-white">
      <Head>
        <title>Tutorial</title>
      </Head>
      <div className="mx-4">
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="text-white font-bold"
        >
          Mechanics
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          The game will show an image and you have to click on the map (it will
          produce a marker ) where you think the image was taken.
        </Typography>{" "}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"1. Click 'Start Guessing' to start the game."}
          <br />
          {"2. Click on the map where you think the image was taken."}
          <br />
          {"3. Click 'Guess' to submit your answer."}
          <br />
        </Typography>
        <h1 className="text-center text-2xl sm:text-5xl text-psauYellow font-Poppins font-bold tracking-wide"></h1>
        <div className="flex gap-2 font-Poppins font-semibold mt-8 justify-center">
          <Link
            href="/"
            className="cursor-pointer flex px-4 py-4 items-center boxShadow text-black bg-gray-200 hover:scale-105 transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Tutorial;
