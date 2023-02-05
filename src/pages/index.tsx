import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { GetStaticProps } from "next";
import { PageInfo } from "types/types";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import Attractions from "@/components/Attractions";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";

type Props = {
  pageInfo: PageInfo;
};

export default function Home({ pageInfo }: Props) {
  return (
    <div className="z-0">
      <Head>
        <title>Noclegi u Uli</title>
        <meta
          name="description"
          content="Noclegi w przystepnych cenach, pokoje 1,2,3 oraz 4 osobowe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <section id="hero">
          <Hero info={pageInfo} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="attractions">
          <Attractions />
        </section>
        <section id="rooms">
          <Rooms />
        </section>
        <section id="specialOffers">
          <SpecialOffers />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  return {
    props: {
      pageInfo,
    },
    revalidate: 60,
  };
};
