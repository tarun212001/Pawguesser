import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

const Leaderboards: React.FC = () => {
  const router = useRouter();
  const [leaderboards, setLeaderboards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    const getLeaderboards = async () => {
      try {
        const { data } = await axios.get("/api/getAll");
        setLeaderboards(data.data.sort((a: any, b: any) => b.score - a.score));
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getLeaderboards();
  }, []);

  return (
    <main className="h-[100vh] overflow-y-auto flex pt-8 items-center gap-4 flex-col bg-psauGreen px-2">
      <Head>
        <title>Leaderboards 🏆</title>
      </Head>
      <h1 className="text-center text-4xl sm:text-7xl text-white font-Poppins font-bold tracking-wide">
        Leaderboards 🏆
      </h1>
      <div className="flex gap-2 font-Poppins font-semibold">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer flex px-4 py-4 items-center boxShadow text-black bg-gray-200 hover:scale-105 transition-all"
        >
          {"🏠 Home"}
        </div>
      </div>
      {!isLoading ? (
        leaderboards.map((leaderboard, i) => {
          return (
            <div
              key={leaderboard.id}
              className="flex w-[100%] justify-center items-start "
            >
              <div className="mt-2 bg-white text-psauGreen font-semibold p-4 max-w-[400px] w-[100%] flex justify-between border-t-4 border-psauYellow flex-wrap">
                <div>
                  {i + 1} - {leaderboard.name || leaderboard.id}
                </div>{" "}
                <div>Score : {leaderboard.score}</div>
                <div className="w-[100%] opacity-50">
                  Game ID: {leaderboard.id}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-white" />
      )}
      {hasError && <div className="font-bold">Something went wrong</div>}
    </main>
  );
};

export default Leaderboards;
