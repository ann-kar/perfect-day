import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { MainTask } from "../components/MainTask";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Perfect day: a habit tracker focused on now</title>
        <meta name="description" content="Your habits" />
      </Head>
      <div className="flex flex-col h-screen">
        <div className="h-14">
          <Header />
        </div>
        <div className="grow h-full">
          <MainTask />
          <h2 className="text-center w-full font-bold text-[#8884d8]">
            translate novel (6 pages)
          </h2>
        </div>
        <div className="bg-amber-500 grow h-full">
          {/* <Todo/> */} todo todo
        </div>
      </div>
    </div>
  );
};

export default Home;
