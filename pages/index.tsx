import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const Home:NextPage = () => {
  return (
      <div>
        <Head>
          <title>Perfect day: a habit tracker focused on now</title>
          <meta name="description" content="Your habits" />
        </Head>
        <div className="flex flex-col h-screen">
          <div className="h-14">
          <Header/>
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
