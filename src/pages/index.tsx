import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { GetStaticProps } from "next";
import { Attraction, Offer, PageInfo, Room } from "types/types";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import Attractions from "@/components/Attractions";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";
import Rooms from "@/components/Rooms";
import { fetchAttractions } from "@/utils/fetchAttractions";
import { fetchRooms } from "@/utils/fetchRooms";
import { fetchOffers } from "@/utils/fetchOffers";
import Testimonials from "@/components/Testimonials";
import Parking from "@/components/Parking";

type Props = {
  pageInfo: PageInfo;
  attractions: Attraction[];
  rooms: Room[];
  offers: Offer[];
};

export default function Home({ pageInfo, attractions, rooms, offers }: Props) {
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
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about">
          <About pageInfo={pageInfo} />
        </section>
        <section id="parking">
          <Parking />
        </section>
        <section id="rooms">
          <Rooms description={pageInfo.roomsDescription} rooms={rooms} />
        </section>
        <section id="attractions">
          <Attractions
            description={pageInfo.attractionsDescription}
            attractions={attractions}
          />
        </section>
        <section id="specialOffers">
          <SpecialOffers
            offers={offers}
            description={pageInfo.offersDescription}
          />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm pageInfo={pageInfo} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo = await fetchPageInfo();
  const attractions = await fetchAttractions();
  const rooms = await fetchRooms();

  // if room location is Gorlice then move it to the end of the array
  rooms.sort((a, _) => {
    if (a.location === "Gorlice") {
      return 1;
    } else {
      return -1;
    }
  });
  const offers = await fetchOffers();
  return {
    props: {
      pageInfo,
      attractions,
      rooms,
      offers,
    },
    revalidate: 60,
  };
};
