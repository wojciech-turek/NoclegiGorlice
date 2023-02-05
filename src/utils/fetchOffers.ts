import { Offer } from "types/types";

export const fetchOffers = async (): Promise<Offer[]> => {
  const response = await fetch(process.env.BASE_URL + "/api/getOffers");
  const { offers }: { offers: Offer[] } = await response.json();

  return offers;
};
