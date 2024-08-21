import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import NavigationIcon from "@mui/icons-material/Navigation";
import BarChartIcon from "@mui/icons-material/BarChart";
import axios from "axios";
import Head from "next/head";

type gameData = {
  name: string;
  score: number;
};
const Finished: React.FC = () => {
  const {width, height} = useWindowSize()
  const router = useRouter();
  const id = router.query.id;
  const [gameData, setGameData] = useState<gameData | null>(null);

  useEffect(() => {
    const getScore = async () => {
      if (!router.isReady) return;
      try {
        const {
          data: { data },
        } = await axios.get("/api/get?id=" + id);
        setGameData(data);
      } catch (error) {
        router.push("/");
      }
    };
    getScore();
  }, [id, router]);

  return (
    <>
      <Head>
        <title>Guess!</title>
      </Head>
      <main className='h-screen w-screen flex justify-center items-center gap-4 flex-col bg-psauGreenLight'>
        <Confetti width={width} height={height} />
        <svg
          height="200px"
          width="200px"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <style type="text/css"> </style>{" "}
            <g>
              {" "}
              <path
                style={{ fill: "#fffff" }}
                d="M205.116,153.078c31.534,11.546,69.397-12.726,84.58-54.209c15.174-41.484,1.915-84.462-29.614-96.001 c-31.541-11.53-69.4,12.735-84.582,54.218C160.325,98.57,173.584,141.548,205.116,153.078z"
              ></path>{" "}
              <path
                style={{ fill: "#fffff" }}
                d="M85.296,219.239c32.987-2.86,56.678-40.344,52.929-83.75c-3.757-43.391-33.545-76.253-66.532-73.409 c-32.984,2.869-56.674,40.36-52.921,83.759C22.53,189.23,52.313,222.091,85.296,219.239z"
              ></path>{" "}
              <path
                style={{ fill: "#fffff" }}
                d="M342.196,217.768c28.952,17.017,70.552-0.073,92.926-38.154c22.374-38.106,17.041-82.758-11.915-99.774 c-28.951-17.001-70.56,0.097-92.93,38.178C307.905,156.117,313.245,200.768,342.196,217.768z"
              ></path>{" "}
              <path
                style={{ fill: "#fffff" }}
                d="M497.259,262.912c-18.771-27.271-63.07-29.379-98.954-4.694c-35.892,24.701-49.762,66.822-30.996,94.101 c18.766,27.27,63.069,29.38,98.954,4.686C502.143,332.312,516.021,290.191,497.259,262.912z"
              ></path>{" "}
              <path
                className="st0"
                d="M304.511,268.059c-3.58-24.773-18.766-47.366-43.039-58.824c-24.268-11.45-51.365-8.807-72.758,4.169 c-23.646,14.35-38.772,33.096-59.138,41.29c-20.363,8.193-77.4-16.209-112.912,48.278c-25.081,45.548-2.057,103.128,44.962,125.315 c35.738,16.864,64.023,14.981,84.788,24.774c20.762,9.793,37.29,32.83,73.025,49.692c47.018,22.188,106.1,3.362,125.315-44.957 c27.206-68.407-27.897-96.922-34.522-117.85C303.613,319.021,308.47,295.426,304.511,268.059z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className='text-center text-4xl sm:text-7xl text-white font-Poppins font-bold tracking-wide'>
          ROAR!!!!
        </h1>
        <h1 className='text-center text-2xl sm:text-4xl text-psauYellow font-Poppins font-bold tracking-wide'>
          Thank you <span className='text-white'>{`"${gameData?.name}"` || ""}</span> for playing 🥳
        </h1>
        <h2 className='text-center text-xl sm:text-2xl text-white font-Poppins font-bold tracking-wide bg-psauYellow'>
          You scored: <span className='underline '>{gameData ? gameData.score : 0}</span>
        </h2>
        <div className="flex">
        <div
          onClick={() => router.push("/guess")}
          className="cursor-pointer flex px-4 py-4 items-center boxShadow text-psauYellow bg-psauYellow hover:scale-105 transition-all mr-2"
        >
          <NavigationIcon sx={{ mr: 1 }} style={{ color: "white" }} />
          <span className="text-white font-Poppins font-bold tracking-wider">
            Play Again
          </span>
        </div>
        <div className='flex gap-2 font-Poppins font-semibold'>
          <div
            onClick={() => router.push("/leaderboards")}
            className='cursor-pointer flex px-4 py-4 items-center boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            <BarChartIcon sx={{ mr: 1 }} /> {"Leaderboards"}
          </div>
        </div>
        </div>
        <div className='flex gap-2 font-Poppins font-semibold'>
          <div
            onClick={() => router.push("/")}
            className='cursor-pointer flex px-4 py-4 items-center boxShadow text-black bg-gray-200 hover:scale-105 transition-all'
          >
            {"🏠 Home"}
          </div>
        </div>
      </main>
    </>
  );
};

export default Finished;
