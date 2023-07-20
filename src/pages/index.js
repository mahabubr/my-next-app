import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return <div>
    <Head>
      <title>Next Home Page</title>
      <meta name="home page" description="this page is created by Nextjs"/>
    </Head>
    HomePage
    </div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
