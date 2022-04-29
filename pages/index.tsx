import type { NextPage } from "next";
import Head from "next/head";

import { HabitList } from "../components/HabitList";

const Home:NextPage = () => {
  return (
      <div>
        <Head>
          <title>Perfect day: a habit tracker focused on now</title>
          <meta name="description" content="Your habits" />
        </Head>
        <div>
          <HabitList />
        </div>
      </div>
  );
};

export default Home;
