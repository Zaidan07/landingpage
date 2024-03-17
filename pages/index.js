import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Member from "../components/Member";
import MoreinfoModal from "../components/MoreinfoModal";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Product from "../components/Product";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Simaku.id</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <div className="bg-gradient-to-r from-green-500 to-yellow-400">
        <Hero/>
        <About/>
        <Product/>
        <Member/>
        <MoreinfoModal/>
        <Cta/>
        <Footer/>
      </div>
    </div>
    
  );
}