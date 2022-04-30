import type { NextPage } from "next";
import Head from "next/head";

const Home:NextPage = () => {
  return (
      <div>
        <Head>
          <title>Perfect day: a habit tracker focused on now</title>
          <meta name="description" content="Your habits" />
        </Head>
        <div className="flex flex-col h-screen">
          <div className="bg-blue-500 h-14">
          {/* <Header/> */}header
          </div>
          <div className="bg-red-500 grow">
          {/* <MainTask/>  */} MainTask
          </div>
          <div className="bg-amber-500 grow">
          {/* <Todo/> */} todo
        </div>
        </div>
      </div>
  );
};

export default Home;
